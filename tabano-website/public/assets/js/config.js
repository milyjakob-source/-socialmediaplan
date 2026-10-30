// Einstellungen für die Seite. Hier steht nichts Geheimes: Alles, was hier eingetragen wird, ist öffentlich
// sichtbar. Schlüssel (z. B. für die Google Places API) gehören in die Skript-Eigenschaften des Apps Scripts.
window.TABANO_CONFIG = {
  // Adresse der Apps-Script-Web-App (endet auf /exec), siehe apps-script/README.md.
  // Leer: Reservierungen und Anfragen gehen als Netlify-Formular raus (E-Mail an das Restaurant).
  endpoint: '',

  // Optional: Link zu einer Google-Kalender-Terminbuchungsseite (calendar.app.google/…). Erscheint als
  // zusätzlicher Weg auf der Reservierungsseite. Leer lassen, wenn nur das Formular genutzt wird.
  googleBookingUrl: '',

  // Google-Analytics-4-Messungs-ID (G-XXXXXXX). Leer: keine Statistik. Wird erst nach Zustimmung geladen.
  ga4Id: '',

  // Reservierung: Zeitraster und Grenzen. Muss zu den Werten im Apps Script passen.
  reservierung: {
    rasterMinuten: 15,
    maxPersonenOnline: 8, // größere Gruppen bitte telefonisch oder über das Anfrageformular
    tageImVoraus: 60,
    vorlaufMinuten: 90, // so kurzfristig kann man frühestens online reservieren
    // Letzte Reservierung vor Küchenschluss bzw. Mittagsende
    zeiten: {
      0: [['16:30', '22:00']], // Sonntag
      1: [['11:30', '13:45'], ['17:30', '22:00']],
      2: [['11:30', '13:45'], ['17:30', '22:00']],
      3: [['11:30', '13:45'], ['17:30', '22:00']],
      4: [['11:30', '13:45'], ['17:30', '22:00']],
      5: [['11:30', '13:45'], ['17:30', '22:00']],
      6: [['18:00', '22:00']], // Samstag
    },
    // Tage ohne Online-Reservierung, z. B. Betriebsferien oder Feiertage (JJJJ-MM-TT).
    geschlossen: [],
  },

  // Öffnungszeiten für den Hinweis „Jetzt geöffnet“. Bis nach Mitternacht als 25:00.
  oeffnung: {
    0: [['16:30', '25:00']],
    1: [['11:30', '14:30'], ['17:30', '25:00']],
    2: [['11:30', '14:30'], ['17:30', '25:00']],
    3: [['11:30', '14:30'], ['17:30', '25:00']],
    4: [['11:30', '14:30'], ['17:30', '25:00']],
    5: [['11:30', '14:30'], ['17:30', '25:00']],
    6: [['18:00', '25:00']],
  },
};
