// Einstellungen für die Seite. Hier steht nichts Geheimes: Alles, was hier eingetragen wird, ist öffentlich
// sichtbar. Schlüssel (z. B. für die Google Places API) gehören in die Skript-Eigenschaften des Apps Scripts.
window.SITE_CONFIG = {
  // Optional: Adresse eines Apps Scripts für Google-Bewertungen und Fotos (?action=google, siehe README).
  // Leer: Sternewert und Lob-Karten bleiben so, wie sie in der Seite stehen. Anfragen gehen über Netlify Forms.
  endpoint: '',

  // Tageskarte und Neuigkeiten aus Google Drive: Adresse des Google-Skripts (apps-script/Karten.gs).
  // Leer: Die beiden Seiten zeigen den Hinweis auf Instagram und Facebook.
  kartenEndpoint: '',

  // Google-Analytics-4-Messungs-ID (G-XXXXXXX). Leer: keine Statistik. Wird erst nach Zustimmung geladen.
  ga4Id: '',

  // Öffnungszeiten für den Hinweis „Jetzt geöffnet“ (0 = Sonntag). Muss zu src/site.mjs passen.
  oeffnung: {
    0: [],
    1: [['09:30', '15:00'], ['18:00', '21:00']],
    2: [['09:30', '15:00'], ['18:00', '21:00']],
    3: [['09:30', '15:00'], ['18:00', '21:00']],
    4: [['09:30', '15:00'], ['18:00', '21:00']],
    5: [['09:30', '15:00'], ['18:00', '21:00']],
    6: [['10:00', '14:00']],
  },
};
