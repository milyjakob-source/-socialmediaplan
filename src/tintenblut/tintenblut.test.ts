import { afterEach, describe, expect, it } from 'vitest';
import { SAEULEN, STICHWORTE, aktiviereSocialProfil } from '../data/social';
import { VELONIFY_PROFIL } from '../data/socialProfil';
import { erstelleBackend } from './backend';
import { TINTENBLUT_PROFIL } from './profil';

describe('Tintenblut social media', () => {
  afterEach(() => aktiviereSocialProfil(VELONIFY_PROFIL));

  it('switches pillars and keywords to the client profile', () => {
    aktiviereSocialProfil(TINTENBLUT_PROFIL);
    expect(SAEULEN.map((s) => s.kurz)).toEqual(['HANDWERK', 'IDEE', 'WISSEN', 'PREDI']);
    expect(STICHWORTE).toEqual(['MOTIV', 'COVER', 'PFLEGE']);
    aktiviereSocialProfil(VELONIFY_PROFIL);
    expect(SAEULEN[0].kurz).toBe('UMZUG');
  });

  it('takes the whole start plan over in the preview, every plan entry linked to its content', async () => {
    aktiviereSocialProfil(TINTENBLUT_PROFIL);
    const { service } = await erstelleBackend('', () => 'test@tintenblut.local');
    const daten = await service.loadSocialDaten();
    const start = TINTENBLUT_PROFIL.start;
    expect(daten.inhalte).toHaveLength(start.inhalte.length);
    expect(daten.plan).toHaveLength(start.plan.length);
    expect(daten.aufgaben).toHaveLength(start.aufgaben.length);
    const mitKennung = start.plan.filter((p) => p.kennung).length;
    expect(daten.plan.filter((p) => p.inhalt_id)).toHaveLength(mitKennung);
    const db = await service.load();
    expect(db.listen.team).toEqual(['Predi', 'Betreuung']);
  });

  it('uses only pillars and urgencies the profile knows', () => {
    const saeulen = new Set(TINTENBLUT_PROFIL.saeulen.map((s) => s.nr));
    const dringlichkeiten = new Set(TINTENBLUT_PROFIL.dringlichkeiten.map((d) => d.wert));
    for (const i of TINTENBLUT_PROFIL.start.inhalte) expect(saeulen.has(i.saeule!)).toBe(true);
    for (const a of TINTENBLUT_PROFIL.start.aufgaben) if (a.dringlichkeit) expect(dringlichkeiten.has(a.dringlichkeit)).toBe(true);
  });
});
