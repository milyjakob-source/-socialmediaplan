import { SOCIAL_START_AUFGABEN, SOCIAL_START_HOOKS, SOCIAL_START_INHALTE, SOCIAL_START_PLAN, SOCIAL_START_TEXTE, type SocialStartPlan } from './socialStart';
import type { SocialAufgabeInput, SocialHookInput, SocialInhaltInput, SocialTextInput } from './types';

/*
 * Everything the social media tool says about one brand: pillars, channels, keywords, wording and the start
 * plan. The hub runs with Velonify's profile; a client build (e.g. src/tintenblut) switches to its own with
 * `aktiviereSocialProfil` before the first render.
 */

export interface Saeule {
  nr: number;
  name: string;
  kurz: string;
  /** Share of all posts, in percent */
  anteil: number;
  zweck: string;
}

export interface Option {
  wert: string;
  label: string;
}

export interface SocialStartListe {
  inhalte: SocialInhaltInput[];
  plan: SocialStartPlan[];
  hooks: SocialHookInput[];
  aufgaben: SocialAufgabeInput[];
  texte: SocialTextInput[];
}

export interface SocialProfil {
  saeulen: readonly Saeule[];
  kanaele: readonly Option[];
  dringlichkeiten: readonly Option[];
  /** Keywords people send by DM. Free text is allowed too – these are the ones the plan asks for. */
  stichworte: readonly string[];
  /** Where every link from social leads. */
  zielStandard: string;
  /** One line under the UTM builder, saying what that target is. */
  linkHinweis: string;
  utmQuellen: readonly Option[];
  dmKanaele: readonly Option[];
  /** Label and placeholder of the DM field that says what the person is about (shop, motif …). */
  dmBezugLabel: string;
  dmBezugPlatzhalter: string;
  qualifiziertText: string;
  /** Whether a DM can be passed on to the CRM inbox – only where the CRM exists. */
  eingang: boolean;
  uebersichtUntertitel: string;
  planUntertitel: string;
  /** The two paragraphs of the empty state that offers the start plan. */
  startText: readonly [string, string];
  beispielSerie: string;
  beispielThema: string;
  utmInhaltPlatzhalter: string;
  sitzungenHinweis: string;
  start: SocialStartListe;
}

export const VELONIFY_PROFIL: SocialProfil = {
  saeulen: [
    { nr: 1, name: 'Umzug ohne Verlust', kurz: 'UMZUG', anteil: 35, zweck: 'Umzügler abholen, Angst vor dem Umzug in einen Plan verwandeln' },
    { nr: 2, name: 'Daten, die stimmen', kurz: 'DATEN', anteil: 25, zweck: 'Shopify-Bestand abholen, zeigen, dass wir Fehler finden, die andere übersehen' },
    { nr: 3, name: 'Mehr aus dem Shop', kurz: 'SHOP', anteil: 20, zweck: 'Zeigen, dass wir nach dem Livegang weiterarbeiten' },
    { nr: 4, name: 'Kein Umweg', kurz: 'UMWEG', anteil: 20, zweck: 'Den Unterschied zu anderen Agenturen greifbar machen' },
  ],
  kanaele: [
    { wert: 'instagram', label: 'Instagram' },
    { wert: 'ig_story', label: 'IG Story' },
    { wert: 'linkedin', label: 'LinkedIn' },
    { wert: 'intern', label: 'Intern' },
  ],
  dringlichkeiten: [
    { wert: 'sofort', label: 'Sofort' },
    { wert: 'diese_woche', label: 'Diese Woche' },
    { wert: 'vor_0110', label: 'Vor 01.10.' },
    { wert: 'vor_1310', label: 'Vor 13.10.' },
    { wert: 'spaeter', label: 'Später' },
  ],
  stichworte: ['UMZUG', 'DATEN', 'FLOWS'],
  zielStandard: 'https://velonify.de/#kontakt',
  linkHinweis: 'Ein Ziel, eine Handlung: der Kontaktabschnitt auf velonify.de mit Terminbuchung. Kein Linktree.',
  utmQuellen: [
    { wert: 'instagram', label: 'Instagram' },
    { wert: 'linkedin', label: 'LinkedIn' },
  ],
  dmKanaele: [
    { wert: 'instagram', label: 'Instagram' },
    { wert: 'linkedin', label: 'LinkedIn' },
  ],
  dmBezugLabel: 'Shop',
  dmBezugPlatzhalter: 'beispielshop.de',
  qualifiziertText: 'Qualifiziert: Onlineshop im DACH-Raum, Entscheider:in, konkreter Bedarf in den nächsten sechs Monaten',
  eingang: true,
  uebersichtUntertitel:
    'Der 90-Tage-Plan vom 22.09. bis 20.12.2026. Drei Posts und fünf Stories pro Woche, Instagram als Hauptkanal, LinkedIn als Zweitverwertung.',
  planUntertitel:
    'Posting-Tage auf Instagram sind Dienstag, Donnerstag und Samstag um 07:30. Stories Montag bis Freitag, LinkedIn mittwochs als reine Zweitverwertung.',
  startText: [
    'Hier liegt der 90-Tage-Plan vom 21.09.2026: vier Säulen, zwölf fertige Posts, zehn Stories, der Redaktionsplan bis zum 21.10., die Hook-Bibliothek und die Aufgaben aus „Erste Woche“ und „Was fehlt“.',
    'Einmal übernehmen, danach wird nur noch hier gepflegt. Das Dokument im Vault bleibt der Stand vom 21.09. und wird nicht mehr nachgezogen.',
  ],
  beispielSerie: 'UMZUGSPLAN #2',
  beispielThema: 'z. B. UMZUGSPLAN #1: 7 Dinge vor dem ersten Export',
  utmInhaltPlatzhalter: '2026-09-24',
  sitzungenHinweis: 'GA4, utm_source=instagram oder linkedin',
  start: {
    inhalte: SOCIAL_START_INHALTE,
    plan: SOCIAL_START_PLAN,
    hooks: SOCIAL_START_HOOKS,
    aufgaben: SOCIAL_START_AUFGABEN,
    texte: SOCIAL_START_TEXTE,
  },
};
