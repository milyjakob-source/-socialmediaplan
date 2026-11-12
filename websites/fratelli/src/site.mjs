// Alle Stammdaten an einer Stelle. Seiten, strukturierte Daten (JSON-LD), Sitemap und Footer lesen von hier.
// Werte mit PRÜFEN stammen aus öffentlichen Quellen (Google-Profil, Presse, Branchenverzeichnisse) und sollten
// vor dem Livegang mit dem Restaurant abgeglichen werden.

export const SITE = {
  url: 'https://www.fratelli-stuttgart.de', // PRÜFEN: Domain steht noch nicht fest; ohne Schrägstrich am Ende
  name: 'Fratelli',
  langName: 'Osteria Fratelli da Fabio',
  shortName: 'Fratelli',
  claim: 'Vero gusto italiano: Osteria, Frühstück und Feinkost in Stuttgart-Degerloch',
  telefon: '+49 711 7683916',
  telefonAnzeige: '0711 768 39 16',
  email: 'info@fratelli-stuttgart.de', // PRÜFEN: Platzhalter, echte Adresse vom Restaurant erfragen
  strasse: 'Epplestraße 10',
  eingang: 'Eingang Felix-Dahn-Straße',
  plz: '70597',
  ort: 'Stuttgart',
  stadtteil: 'Degerloch',
  geo: { lat: 48.7486, lng: 9.1699 }, // PRÜFEN: grob ermittelt, in Google Maps nachsehen
  inhaber: ['Fabio Meli'],
  bruder: 'Flavio',
  seit: 2013, // Fabio Meli führt das Haus seit 2013 (früher „Russini“), seit 2020 als „Fratelli“
  fratelliSeit: 2020,
  // USt-IdNr. nach § 27a UStG; nur eintragen, wenn vorhanden, dann erscheint sie im Impressum. PRÜFEN
  ustId: '',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Osteria+Fratelli+da+Fabio+Epplestra%C3%9Fe+10+70597+Stuttgart',
  mapsEmbed: 'https://www.google.com/maps?q=Osteria+Fratelli+da+Fabio,+Epplestra%C3%9Fe+10,+70597+Stuttgart&output=embed',
  // Link „Bewertung schreiben“: im Google-Unternehmensprofil unter „Rezensionen erhalten“ kopieren. PRÜFEN
  reviewLink: 'https://www.google.com/maps/search/?api=1&query=Osteria+Fratelli+da+Fabio+Epplestra%C3%9Fe+10+70597+Stuttgart',
  // Google-Sternebewertung für die Anzeige, solange das Apps Script die Live-Werte nicht liefert (Stand November 2026).
  googleBewertung: 4.5,
  googleAnzahl: 136,
  preisProPerson: '10–20 €',
  instagramName: 'fratelli_stuttgart',
  facebookName: 'Fratelli Ristorante',
  social: {
    instagram: 'https://www.instagram.com/fratelli_stuttgart/',
    facebook: 'https://www.facebook.com/p/Fratelli-Ristorante-100068560024740/',
  },
};

// Öffnungszeiten laut Google-Profil. Wochentag nach JavaScript: 0 = Sonntag … 6 = Samstag. Leere Liste = Ruhetag.
export const ZEITEN = [
  { tage: 'Montag bis Freitag', kurz: 'Mo-Fr', days: [1, 2, 3, 4, 5], slots: [['09:30', '15:00'], ['18:00', '21:00']] },
  { tage: 'Samstag', kurz: 'Sa', days: [6], slots: [['10:00', '14:00']] },
  { tage: 'Sonntag', kurz: 'So', days: [0], slots: [] },
];
// Küchenschluss; leer lassen, wenn er mit den Öffnungszeiten zusammenfällt.
export const KUECHE_BIS = '';

// Hauptnavigation. Pfade sind Ordner, damit die Adressen sauber bleiben (/speisekarte/).
export const NAV = [
  { slug: 'speisekarte/', label: 'Speisekarte' },
  { slug: 'tageskarte/', label: 'Tageskarte' },
  { slug: 'neuigkeiten/', label: 'Neuigkeiten' },
  { slug: 'ueber-uns/', label: 'Über uns' },
  { slug: 'galerie/', label: 'Galerie' },
  { slug: 'kontakt/', label: 'Kontakt' },
];

export const LEGAL = [
  { slug: 'impressum/', label: 'Impressum' },
  { slug: 'datenschutz/', label: 'Datenschutz' },
  { slug: 'agb/', label: 'AGB' },
];

/** Öffnungszeiten als Text, z. B. „09:30-15:00 & 18:00-21:00“, oder „Ruhetag“. */
export function zeitText(slots) {
  if (!slots.length) return 'Ruhetag';
  return slots.map(([von, bis]) => `${von}-${bis.replace('25:', '01:')}`).join(' & ');
}

/** Telefonnummer für tel:-Links. */
export const tel = () => SITE.telefon.replace(/\s/g, '');
