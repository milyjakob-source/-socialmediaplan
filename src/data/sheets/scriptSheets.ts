import { SchemaError } from '../errors';
import type { SheetsApi, SpreadsheetInfo, ValueWrite } from './sheetsClient';

/*
 * Google Sheets without a Google login: an Apps Script web app (apps-script/social-kunde) runs as the owner of
 * the sheet and forwards exactly the calls of SheetsApi. Used by client builds whose users have no Google
 * account in the team's domain. An optional access code keeps strangers out; whoever has it can edit.
 */

/** The web app refused the access code – the page asks for it again. */
export class ZugangError extends Error {
  constructor(message = 'Der Zugangscode stimmt nicht.') {
    super(message);
    this.name = 'ZugangError';
  }
}

interface Antwort {
  ok: boolean;
  daten?: unknown;
  fehler?: string;
  art?: 'zugang' | 'schema' | 'fehler';
}

export class ScriptSheets implements SheetsApi {
  private readonly url: string;
  private readonly code: () => string;

  constructor(url: string, code: () => string) {
    this.url = url;
    this.code = code;
  }

  private async rufe<T>(op: string, args: Record<string, unknown> = {}): Promise<T> {
    let response: Response;
    try {
      // text/plain keeps the request "simple": no CORS preflight, which Apps Script cannot answer.
      response = await fetch(this.url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ code: this.code(), op, args }),
        redirect: 'follow',
      });
    } catch {
      throw new Error('Keine Verbindung zum Google Sheet. Bitte Internetverbindung prüfen und neu laden.');
    }
    if (!response.ok) throw new Error(`Das Google Sheet antwortet nicht (${response.status}). Ist die Web-App veröffentlicht?`);
    let antwort: Antwort;
    try {
      antwort = (await response.json()) as Antwort;
    } catch {
      throw new Error('Das Google Sheet hat unlesbar geantwortet. Ist „Zugriff: Jeder“ bei der Web-App eingestellt?');
    }
    if (antwort.ok) return antwort.daten as T;
    if (antwort.art === 'zugang') throw new ZugangError(antwort.fehler);
    if (antwort.art === 'schema') throw new SchemaError();
    throw new Error(antwort.fehler || 'Das Google Sheet meldet einen Fehler.');
  }

  getValues(range: string): Promise<unknown[][]> {
    return this.rufe('getValues', { range });
  }

  batchGetValues(ranges: string[]): Promise<unknown[][][]> {
    return this.rufe('batchGetValues', { ranges });
  }

  async updateValues(range: string, values: unknown[][]): Promise<void> {
    await this.rufe('updateValues', { range, values });
  }

  async batchUpdateValues(data: ValueWrite[]): Promise<void> {
    if (data.length === 0) return;
    await this.rufe('batchUpdateValues', { data });
  }

  async appendValues(range: string, values: unknown[][]): Promise<void> {
    if (values.length === 0) return;
    await this.rufe('appendValues', { range, values });
  }

  getSpreadsheet(): Promise<SpreadsheetInfo> {
    return this.rufe('getSpreadsheet');
  }

  async batchUpdate(requests: unknown[]): Promise<void> {
    if (requests.length === 0) return;
    await this.rufe('batchUpdate', { requests });
  }
}
