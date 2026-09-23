import type { CrmBackend } from '../data/CrmContext';
import { CrmService } from '../data/crm';
import { MemoryCalendar, MemoryDrive } from '../data/demo/memoryGoogle';
import { MemorySheets } from '../data/demo/memorySheets';
import { SCHEMA, SOCIAL_TABS } from '../data/schema';
import { checkSetup, runSetup } from '../data/sheets/setup';
import { ScriptSheets } from '../data/sheets/scriptSheets';
import { quoteTab, type SheetsApi } from '../data/sheets/sheetsClient';
import { SheetStore } from '../data/sheets/sheetStore';
import type { Database, Einstellungen, Listen } from '../data/types';
import { TINTENBLUT_TEAM } from './profil';

/** Only what the social media tool needs – the client sheet holds no CRM. */
const TABS = [...SOCIAL_TABS.map((tab) => SCHEMA[tab]), SCHEMA.listen, SCHEMA.einstellungen];
const LISTEN = { team: TINTENBLUT_TEAM };

const CODE_KEY = 'tintenblut-social.code';

export function gespeicherterCode(): string {
  try {
    return localStorage.getItem(CODE_KEY) ?? '';
  } catch {
    return '';
  }
}

export function merkeCode(code: string): void {
  try {
    if (code) localStorage.setItem(CODE_KEY, code);
    else localStorage.removeItem(CODE_KEY);
  } catch {
    // Storage blocked: the code lasts until reload.
  }
}

/** The client sheet has no CRM tabs: load() reads only the team list and the settings. */
class KundenStore extends SheetStore {
  private readonly quelle: SheetsApi;

  constructor(api: SheetsApi) {
    super(api);
    this.quelle = api;
  }

  async load(): Promise<Database> {
    const [listenWerte, einstellungenWerte] = await this.quelle.batchGetValues([
      `${quoteTab(SCHEMA.listen.name)}!A1:ZZ`,
      `${quoteTab(SCHEMA.einstellungen.name)}!A1:ZZ`,
    ]);
    const zeilen = (werte: unknown[][]) => {
      const [kopf = [], ...rest] = werte;
      const spalten = kopf.map((z) => String(z ?? '').trim());
      return rest.map((zeile) => Object.fromEntries(spalten.map((s, i) => [s, String(zeile[i] ?? '').trim()])));
    };
    const listen: Listen = {};
    for (const z of zeilen(listenWerte)) if (z.liste && z.wert) (listen[z.liste] ??= []).push(z.wert);
    const einstellungen: Einstellungen = {};
    for (const z of zeilen(einstellungenWerte)) if (z.schluessel) einstellungen[z.schluessel] = z.wert ?? '';
    return { firmen: [], kontakte: [], deals: [], aktivitaeten: [], wiedervorlagen: [], listen: { ...LISTEN, ...listen }, einstellungen };
  }
}

function service(sheets: SheetsApi, nutzer: () => string): CrmService {
  return new CrmService({
    store: new KundenStore(sheets),
    // Social media touches neither Drive nor Calendar.
    drive: new MemoryDrive(),
    calendar: new MemoryCalendar(),
    currentUser: nutzer,
  });
}

/**
 * With a web app URL: the shared Google Sheet, set up on first open. Without one: a preview in memory with the
 * full plan already taken over, so the tool can be shown before the sheet exists.
 */
export async function erstelleBackend(skriptUrl: string, nutzer: () => string): Promise<CrmBackend> {
  if (!skriptUrl) {
    const sheets = new MemorySheets('Tintenblut Social (Vorschau)');
    await runSetup(sheets, { tabs: TABS, listen: LISTEN });
    const s = service(sheets, nutzer);
    await s.uebernimmSocialPlan();
    return { service: s, sheets };
  }
  const sheets = new ScriptSheets(skriptUrl, gespeicherterCode);
  const status = await checkSetup(sheets, { tabs: TABS });
  if (!status.ready) await runSetup(sheets, { tabs: TABS, listen: LISTEN });
  return { service: service(sheets, nutzer), sheets };
}
