# Website Fratelli – vero gusto italiano

Website der **Osteria Fratelli da Fabio**, Epplestraße 10 (Eingang Felix-Dahn-Straße), 70597 Stuttgart-Degerloch.
Gebaut nach der Vorlage der Il-Pomodoro-Website (gleicher Aufbau, gleiche Technik), angepasst an Logo und
Gastraum des Fratelli: Olivschwarz, Creme und Messing, Serifenschrift passend zum Logo und der Schachbrettboden
als wiederkehrendes Muster. Statische Seiten ohne Framework: schnell, gut für Google, läuft auf jedem Hosting.

| Seite | Adresse | Inhalt |
|---|---|---|
| Start | `/` | Hero mit Gastraum, Status „jetzt geöffnet“, Küche, Geschichte der Brüder, Bilder, Bewertungen, Gut zu wissen, Mitnehmen & Feinkost, Instagram/Facebook, Anfahrt mit Karte |
| Speisekarte | `/speisekarte/` | Colazione, Antipasti, Insalate, Pasta, Pinsa, Dolci, Getränke, Weine (Daten: `src/speisekarte.mjs`) |
| Tageskarte, Neuigkeiten | `/tageskarte/`, `/neuigkeiten/` | Neuestes Bild aus Google Drive, groß; sonst Hinweis auf Instagram und Facebook |
| Über uns | `/ueber-uns/` | Geschichte (Russini → Fratelli), Feinkost, Gastraum, Werte |
| Galerie | `/galerie/` | Fotos im Mauerwerk-Raster |
| Kontakt | `/kontakt/` | Telefon (Reservierung), E-Mail, Zeiten, Karte, Anfrageformular (Feiern, separater Raum, Gutscheine, Feinkost) |
| Rechtliches | `/impressum/`, `/datenschutz/`, `/agb/`, `404.html` | |

Gegenüber der Vorlage weggelassen: **Wochenkarte** (Wunsch), **Bestellen über Lieferando/Wolt** (das Fratelli
liefert nicht, nur Take-away) und die **Inhaber-App mit Online-Bestellung** (braucht das große Apps Script; bei
Bedarf aus der Vorlage nachrüstbar). Der Hauptknopf heißt überall „Tisch reservieren“ und ruft an.

Die Seite startet **dunkel** (wie das Logo); hell ist oben rechts umschaltbar und wird gemerkt.
Einblend-Animationen und weiche Seitenwechsel respektieren „Bewegung reduzieren“.

## Arbeiten an der Seite

```bash
npm install        # einmalig, nur für die Bildaufbereitung nötig
npm run build      # Seiten aus src/ nach public/ bauen
npm run bilder     # Fotos aus bilder-original/ komprimieren
npm run logo       # Logo hell/dunkel, Icons und Social-Vorschau aus tools/logo-original.png (Python + Pillow)
npm run pruefen    # Links, Meta-Texte, Alt-Texte, Labels, Kontraste, Geheimnisse prüfen
npm run vorschau   # lokal ansehen unter http://localhost:4173
```

- Stammdaten: `src/site.mjs` (Adresse, Telefon, Zeiten, Social Links), Seiten in `src/pages/`
- Speisekarte: `src/speisekarte.mjs`
- Design: `public/assets/css/style.css` (Farben als Variablen oben, die Fratelli-Schicht am Ende)
- Einstellungen fürs Frontend: `public/assets/js/config.js` (auch Öffnungszeiten für „jetzt geöffnet“)

Nach jeder Änderung in `src/` einmal `npm run build`; `public/` wird mit eingecheckt und so veröffentlicht.

## Quellen

- Google-Unternehmensprofil (vom Kunden übergeben): Adresse, Telefon, Öffnungszeiten, 4,5 Sterne aus 136
  Bewertungen, 10–20 € pro Person, nur Barzahlung, Terrasse, privater Speiseraum, Hunde willkommen,
  Frühstück, hausgemachte Pasta, Pinsa, Antipasti, Take-away, „Pasta alla Rosario“.
- Stuttgarter Zeitung („Warum das Russini nun Fratelli heißt“, 2021) laut Suchergebnis: Fabio Meli führt das
  Haus seit 2013 (früher Bistro „Russini“), um 2020 umbenannt in Fratelli mit Bruder Flavio; Osteria mit
  Feinkost, Weine, Olivenöl vom Vater aus Sizilien, Pinsa zum Mitnehmen.
- Fotos von Logo und Gastraum (vom Kunden). Detailbilder sind Ausschnitte daraus.

## Vor dem Livegang: offene Punkte

Im Code mit `PRÜFEN` markiert.

- [ ] **Speisekarte und Preise:** Online war keine aktuelle Karte zu finden. `src/speisekarte.mjs` ist ein
      stimmiger Vorschlag (Preisrahmen 10–20 €) und muss durch die echte Karte ersetzt werden.
- [ ] **E-Mail-Adresse:** `info@fratelli-stuttgart.de` ist ein Platzhalter (`src/site.mjs`).
- [ ] **Domain:** `fratelli-stuttgart.de` ist angenommen (`src/site.mjs`, `public/.htaccess`).
- [ ] **Speisenfotos:** Bisher gibt es nur Raumfotos. Fotos von Pasta, Pinsa und Frühstück nach
      `bilder-original/` legen (Dateiname = Bildplatz), `npm run bilder`, in Seite oder Galerie eintragen.
- [ ] **Öffnungszeiten** bestätigen lassen (Google-Profil). Bei Änderungen `src/site.mjs` und
      `public/assets/js/config.js` anpassen.
- [ ] **Jahreszahlen** 2013/2020 und die Geschichte kurz mit Fabio Meli abstimmen.
- [ ] **Impressum:** USt-IdNr. bei `ustId` ergänzen, falls vorhanden. Rechtstexte bitte prüfen lassen.
- [ ] **Koordinaten** (`geo`) in Google Maps nachsehen.

## Tageskarte und Neuigkeiten (Google Drive)

Die Seiten `/tageskarte/` und `/neuigkeiten/` zeigen automatisch das neueste Bild aus gleichnamigen
Google-Drive-Ordnern. Einrichtung: Ordner „Tageskarte“ und „Neuigkeiten“ in Drive anlegen, ihre IDs in
`apps-script/Karten.gs` bei `ORDNER` eintragen, das Skript als Web-App bereitstellen (Anleitung oben in der
Datei) und die Adresse in `public/assets/js/config.js` bei `kartenEndpoint` eintragen. Solange das leer ist,
zeigen beide Seiten den Hinweis auf Instagram und Facebook.

## Anfragen und Bewertungen

- **Anfrageformular** (Kontakt): läuft ohne weiteres Zutun als Netlify-Formular, Benachrichtigung per E-Mail
  unter *Forms → Notifications* einrichten.
- **Google-Bewertungen live:** optional über ein Apps Script mit Places-API-Schlüssel (`endpoint` in
  `config.js`, Antwort auf `?action=google`, siehe Vorlage). Ohne zeigt die Startseite den Sternewert aus
  `src/site.mjs` und drei zusammengefasste Lob-Karten (keine erfundenen Zitate).

## Veröffentlichen (Netlify)

1. app.netlify.com → *Add new site → Import from Git* → dieses Repo. **Base directory:** `websites/fratelli`,
   **Publish directory:** `public`, Build command leer (steht auch in `netlify.toml`).
2. *Domain management*: Domain hinzufügen, DNS umstellen, *HTTPS → Force HTTPS*.
3. Search Console: Domain bestätigen, `/sitemap.xml` einreichen.

Liegt die Seite bei einem Apache-Hoster, übernimmt `public/.htaccess` Umleitungen und Sicherheits-Header.

## Statistik

Google Analytics 4: Messungs-ID (`G-…`) in `config.js` bei `ga4Id` eintragen. Geladen wird erst nach
Zustimmung im Cookie-Banner.
