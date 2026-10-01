// Alle Stammdaten an einer Stelle. Seiten, strukturierte Daten (JSON-LD), Sitemap und Footer lesen von hier.
// Werte mit PRÜFEN stammen aus öffentlichen Quellen (alte Website, Branchenverzeichnisse) und sollten
// vor dem Livegang mit dem Restaurant abgeglichen werden.

export const SITE = {
  url: 'https://tabano-stuttgart.de', // ohne Schrägstrich am Ende
  name: 'Trattoria Tabano',
  shortName: 'Tabano',
  claim: 'Italienische Küche von Südtirol bis Sizilien',
  telefon: '+49 711 91278780',
  telefonAnzeige: '0711 91 27 87 80',
  email: 'info@tabano.de',
  strasse: 'Silberburgstraße 62b',
  plz: '70176',
  ort: 'Stuttgart',
  stadtteil: 'Stuttgart-West',
  geo: { lat: 48.77265, lng: 9.16655 }, // PRÜFEN: Koordinaten grob ermittelt, in Google Maps nachsehen
  inhaber: ['Ludovico Bellusci', "Angelo D'Agostino"],
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Trattoria+Tabano+Silberburgstra%C3%9Fe+62b+70176+Stuttgart',
  mapsEmbed:
    'https://www.google.com/maps?q=Trattoria+Tabano,+Silberburgstra%C3%9Fe+62b,+70176+Stuttgart&output=embed',
  // Link „Bewertung schreiben“: im Google-Unternehmensprofil unter „Rezensionen erhalten“ kopieren. PRÜFEN
  reviewLink:
    'https://www.google.com/maps/search/?api=1&query=Trattoria+Tabano+Silberburgstra%C3%9Fe+62b+70176+Stuttgart',
  // Google-Sternebewertung für die Anzeige, solange das Apps Script die Live-Werte nicht liefert. PRÜFEN
  googleBewertung: 4.3,
  social: {
    facebook: 'https://www.facebook.com/p/Tabano-100057607265058/', // PRÜFEN
    instagram: '', // Handle eintragen, sonst wird kein Link gezeigt
  },
};

// Öffnungszeiten. Wochentag nach JavaScript: 0 = Sonntag … 6 = Samstag. „bis“ nach Mitternacht als 25:00.
export const ZEITEN = [
  { tage: 'Montag bis Freitag', kurz: 'Mo-Fr', days: [1, 2, 3, 4, 5], slots: [['11:30', '14:30'], ['17:30', '25:00']] },
  { tage: 'Samstag', kurz: 'Sa', days: [6], slots: [['18:00', '25:00']] },
  { tage: 'Sonntag', kurz: 'So', days: [0], slots: [['16:30', '25:00']] },
];
export const KUECHE_BIS = '23:00';

// Hauptnavigation: sechs Seiten. Pfade sind Ordner, damit die Adressen sauber bleiben (/speisekarte/).
export const NAV = [
  { slug: '', label: 'Start' },
  { slug: 'speisekarte/', label: 'Speisekarte' },
  { slug: 'ueber-uns/', label: 'Über uns' },
  { slug: 'galerie/', label: 'Galerie' },
  { slug: 'kontakt/', label: 'Kontakt' },
  { slug: 'reservierung/', label: 'Reservieren', cta: true },
];

export const LEGAL = [
  { slug: 'impressum/', label: 'Impressum' },
  { slug: 'datenschutz/', label: 'Datenschutz' },
  { slug: 'agb/', label: 'AGB' },
];

/** Öffnungszeiten als Text, z. B. „11:30-14:30 & 17:30-01:00“. */
export function zeitText(slots) {
  return slots.map(([von, bis]) => `${von}-${bis.replace('25:', '01:')}`).join(' & ');
}
