import type { SocialProfil } from '../data/socialProfil';
import {
  TINTENBLUT_START_AUFGABEN,
  TINTENBLUT_START_HOOKS,
  TINTENBLUT_START_INHALTE,
  TINTENBLUT_START_PLAN,
  TINTENBLUT_START_TEXTE,
} from './socialStart';

/** Who works in the tool. Picked once per browser in the sidebar. */
export const TINTENBLUT_TEAM = ['Predi', 'Betreuung'];

export const TINTENBLUT_PROFIL: SocialProfil = {
  saeulen: [
    { nr: 1, name: 'Handwerk', kurz: 'HANDWERK', anteil: 35, zweck: 'Zeigen, wie ein Stück entsteht: Realistik und Blackwork im Prozess' },
    { nr: 2, name: 'Von der Idee zur Haut', kurz: 'IDEE', anteil: 25, zweck: 'Custom-Entwürfe und Cover-Ups: was „keine Vorlagen von der Stange“ heißt' },
    { nr: 3, name: 'Wissen & Vertrauen', kurz: 'WISSEN', anteil: 20, zweck: 'Unsicherheit nehmen: Beratung, Hygiene, Pflege' },
    { nr: 4, name: 'Predi & Stimmen', kurz: 'PREDI', anteil: 20, zweck: 'Den Künstler zeigen und was Kund:innen sagen' },
  ],
  kanaele: [
    { wert: 'instagram', label: 'Instagram' },
    { wert: 'ig_story', label: 'IG Story' },
    { wert: 'google', label: 'Google-Profil' },
    { wert: 'facebook', label: 'Facebook' },
    { wert: 'intern', label: 'Intern' },
  ],
  dringlichkeiten: [
    { wert: 'sofort', label: 'Sofort' },
    { wert: 'diese_woche', label: 'Diese Woche' },
    { wert: 'vor_0810', label: 'Vor 08.10.' },
    { wert: 'vor_2010', label: 'Vor 20.10.' },
    { wert: 'spaeter', label: 'Später' },
  ],
  stichworte: ['MOTIV', 'COVER', 'PFLEGE'],
  zielStandard: '',
  linkHinweis: 'Ein Ziel, eine Handlung: der Kontaktbereich der Website. Adresse einmal eintragen und „Linkziel merken“ klicken. Im Profil selbst steht der WhatsApp-Link.',
  utmQuellen: [
    { wert: 'instagram', label: 'Instagram' },
    { wert: 'facebook', label: 'Facebook' },
    { wert: 'google', label: 'Google-Profil' },
  ],
  dmKanaele: [
    { wert: 'instagram', label: 'Instagram' },
    { wert: 'whatsapp', label: 'WhatsApp' },
    { wert: 'facebook', label: 'Facebook' },
  ],
  dmBezugLabel: 'Motiv / Idee',
  dmBezugPlatzhalter: 'z. B. Cover-Up Unterarm, Realistik Portrait',
  qualifiziertText: 'Qualifiziert: konkrete Motividee oder Cover-Up, Bereitschaft zur Beratung, Termin in den nächsten drei Monaten realistisch',
  eingang: false,
  uebersichtUntertitel:
    'Der 90-Tage-Plan vom 29.09. bis 27.12.2026. Drei Posts und vier Stories pro Woche, Instagram als Hauptkanal, Google-Profil und Facebook als Zweitverwertung.',
  planUntertitel: 'Feed-Posts dienstags, donnerstags und sonntags um 19:30, nach Studioschluss. Stories live während der Öffnungszeiten.',
  startText: [
    'Hier liegt der 90-Tage-Plan für Tintenblut Tattoo: vier Säulen, zwölf ausgeschriebene Posts, acht Stories, der Redaktionsplan bis zum 27.10., die Hook-Bibliothek und die Aufgaben aus „Erste Woche“ und „Was fehlt“.',
    'Einmal übernehmen, danach wird nur noch hier gepflegt. Stellen mit „[ERGÄNZEN: …]“ brauchen noch Material oder eine Freigabe von Predi.',
  ],
  beispielSerie: 'TAFEL #3',
  beispielThema: 'z. B. TAFEL #3: Löwe, Schulter',
  utmInhaltPlatzhalter: 'k1',
  sitzungenHinweis: 'Website-Statistik, utm_source=instagram',
  start: {
    inhalte: TINTENBLUT_START_INHALTE,
    plan: TINTENBLUT_START_PLAN,
    hooks: TINTENBLUT_START_HOOKS,
    aufgaben: TINTENBLUT_START_AUFGABEN,
    texte: TINTENBLUT_START_TEXTE,
  },
};
