# Website Trattoria Tabano

Neue Website für die Trattoria Tabano, Silberburgstraße 62b, Stuttgart-West. Ersetzt tabano-stuttgart.de.
Statische Seiten ohne Framework: schnell, gut für Google, läuft auf jedem Hosting.

| Seite | Adresse | Inhalt |
|---|---|---|
| Start | `/` | Hero, Status „jetzt geöffnet“, Küche, Geschichte, Google-Bewertungen, Reservierungs-Aufruf, Anfahrt mit Karte |
| Speisekarte | `/speisekarte/` | Karte nach Kategorien mit Leiste, Vegetarisch/Glutenfrei, Allergen-Hinweis |
| Über uns | `/ueber-uns/` | Gastgeber, Werte, Feiern |
| Galerie | `/galerie/` | 9 Fotos im Mauerwerk-Raster |
| Kontakt | `/kontakt/` | Telefon, E-Mail, Zeiten, Karte, Anfrageformular (Feiern, Gutscheine, Abholung) |
| Reservieren | `/reservierung/` | Online-Reservierung über Google |
| Rechtliches | `/impressum/`, `/datenschutz/`, `/agb/`, `404.html` | |

Hell- und Dunkelmodus (folgt dem System, umschaltbar oben rechts), Einblend-Animationen und weiche
Seitenwechsel; alles respektiert „Bewegung reduzieren“.

## Arbeiten an der Seite

```bash
npm install        # einmalig, nur für die Bildaufbereitung nötig
npm run build      # Seiten aus src/ nach public/ bauen
npm run bilder     # Fotos aus bilder-original/ komprimieren, Icons und Social-Vorschau erzeugen
npm run pruefen    # Links, Meta-Texte, Alt-Texte, Labels, Kontraste, Geheimnisse prüfen
npm run vorschau   # lokal ansehen unter http://localhost:4173
```

- Texte und Stammdaten: `src/site.mjs` (Adresse, Telefon, Zeiten, Social Links), Seiten in `src/pages/`
- Speisekarte: `src/speisekarte.mjs`
- Design: `public/assets/css/style.css` (Farben als Variablen oben)
- Einstellungen fürs Frontend: `public/assets/js/config.js`

Nach jeder Änderung in `src/` einmal `npm run build`; `public/` wird mit ins Repo eingecheckt und so
veröffentlicht.

## Vor dem Livegang: offene Punkte

Die alte Website war aus dieser Arbeitsumgebung nicht abrufbar. Inhalte stammen aus öffentlichen Quellen
(Branchenverzeichnisse, Presse, Speisekarten-Portale) und sind mit dem Restaurant abzugleichen. Im Code
mit `PRÜFEN` markiert, auf den Rechtsseiten gelb hervorgehoben.

- [ ] **Logo:** Original als SVG nach `public/assets/img/logo.svg` (dunkle Schrift) und `logo-dark.svg`
      (helle Schrift) legen. Jetzt steht dort eine Platzhalter-Wortmarke. Favicon: `favicon.svg` ersetzen,
      dann `npm run bilder`.
- [ ] **Fotos** nach `bilder-original/` legen (Dateiname = Bildplatz), dann `npm run bilder`:
      `hero` (Hochformat, Pasta oder Gastraum), `wein` (quadratisch), `kueche-pasta`, `kueche-pizza`,
      `kueche-fisch`, `gastraum`, `gastraum-weit` (Panorama), `team` (Hochformat), `galerie-1` bis `galerie-9`.
      Nur Fotos mit Nutzungsrecht (eigene, vom Restaurant, vom Fotografen). Bis dahin zeigen die Rahmen
      eine ruhige Fläche mit Beschreibung. Social-Vorschau: `src/og.svg` anpassen oder `public/assets/img/og.jpg`
      (1200 × 630) ersetzen.
- [ ] **Speisekarte und Preise** in `src/speisekarte.mjs` mit der aktuellen Karte abgleichen, optional PDF
      verlinken (`KARTE_PDF`).
- [ ] **Impressum:** Rechtsform, USt-IdNr.; **Datenschutz:** Datum, Hoster; **AGB:** Stornoregel für
      Gruppen, Zahlungsarten. Rechtstexte bitte prüfen lassen.
- [ ] Öffnungszeiten, Koordinaten, Facebook-/Instagram-Link in `src/site.mjs`.

## Reservierung über Google einrichten

Die Reservierung läuft über ein Google Apps Script im Google-Konto des Restaurants. Jede Reservierung
landet als Zeile in einer Google-Tabelle, als Termin im Google Kalender, der Gast bekommt eine
Bestätigung mit Storno-Link, das Restaurant eine Benachrichtigung. Die Seite prüft freie Plätze pro
Uhrzeit (Kapazität einstellbar), gegen Spam gibt es ein unsichtbares Feld, eine Zeitsperre und eine
Drosselung pro E-Mail. Kosten: keine.

1. Mit dem Google-Konto des Restaurants eine neue Google-Tabelle „Tabano Reservierungen“ anlegen.
2. *Erweiterungen → Apps Script*. Den Inhalt von `apps-script/Code.gs` in `Code.gs` kopieren.
   Unter *Projekteinstellungen* „appsscript.json im Editor anzeigen“ einschalten und den Inhalt von
   `apps-script/appsscript.json` übernehmen.
3. *Projekteinstellungen → Skripteigenschaften*:
   - `NOTIFY_EMAIL`: Adresse, die über neue Reservierungen informiert wird (z. B. info@tabano.de)
   - `CALENDAR_ID` (optional): eigener Kalender „Reservierungen“ (Kalender-Einstellungen → Kalender-ID).
     Leer = Hauptkalender des Kontos.
4. Im Editor die Funktion `einrichten` auswählen und ausführen, Berechtigungen erlauben. Legt die Tabs
   „Reservierungen“ und „Anfragen“ an und löscht künftig jede Nacht Reservierungen, die älter als 90 Tage
   sind (Datenschutz).
5. *Bereitstellen → Neue Bereitstellung → Web-App*: „Ausführen als: Ich“, „Zugriff: Jeder“. Die Adresse
   (endet auf `/exec`) in `public/assets/js/config.js` bei `endpoint` eintragen, `npm run build`,
   veröffentlichen.
6. Testen: Reservierung auf der Seite abschicken. Zeile in der Tabelle, Termin im Kalender, zwei E-Mails.

Einstellungen wie Kapazität (`kapazitaet`, Gäste gleichzeitig), Sitzdauer, Zeitraster, sofortige
Bestätigung oder Prüfung von Hand stehen oben in `Code.gs` unter `EINSTELLUNGEN`. Zeiten und Raster
müssen zu `reservierung` in `config.js` passen. Wer von Hand bestätigen will: `sofortBestaetigen: false`,
dann in der Tabelle den Status auf `bestaetigt` setzen und den Gast anrufen oder anschreiben.

Nach Änderungen am Skript: *Bereitstellen → Bereitstellungen verwalten → Bearbeiten → Neue Version*,
damit die Adresse gleich bleibt.

**Ohne Apps Script** funktioniert das Formular trotzdem: Auf Netlify gehen Reservierungen und Anfragen als
Netlify-Formular raus (Benachrichtigung per E-Mail unter *Forms → Notifications*), der Knopf heißt dann
„Reservierung anfragen“ und das Restaurant bestätigt selbst.

**Google-Unternehmensprofil:** Unter *Profil bearbeiten → Buchungen / Reservierungen* als Link
`https://tabano-stuttgart.de/reservierung/` eintragen. Dann führt der Knopf „Reservieren“ in Google Maps
und in der Suche direkt zum Formular. Wer zusätzlich eine Google-Kalender-Terminbuchungsseite nutzt, kann
deren Link in `config.js` bei `googleBookingUrl` eintragen.

## Google-Bewertungen und Fotos einbinden

Mit einem Places-API-Schlüssel holt das Apps Script aus dem Google-Unternehmensprofil:
- Sternedurchschnitt, Anzahl und die Top-Rezensionen (beste zuerst) für die Startseite,
- bis zu 10 Fotos, die automatisch in alle Bildrahmen gesetzt werden, für die noch kein eigenes Foto in
  `assets/img/fotos` liegt, mit Urhebernennung, wie Google es verlangt.

Eigene Fotos haben immer Vorrang. Der API-Schlüssel liegt nur im Apps Script, nie im Browser.

1. [console.cloud.google.com](https://console.cloud.google.com): Projekt anlegen, **Places API (New)**
   aktivieren, *Anmeldedaten → API-Schlüssel*. Schlüssel beschränken auf „Places API (New)“.
   Die Abfrage wird 6 Stunden zwischengespeichert; das bleibt im kostenlosen Kontingent.
2. Place ID suchen: [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
   → „Trattoria Tabano Stuttgart“.
3. Im Apps Script unter Skripteigenschaften `PLACES_API_KEY` und `PLACE_ID` eintragen.

Ohne diese Werte zeigt der Abschnitt nur die Links „Alle Bewertungen auf Google“ und „Bewertung
schreiben“ (Link dafür: Unternehmensprofil → „Rezensionen erhalten“, in `src/site.mjs` bei `reviewLink`).

## Veröffentlichen (Netlify)

1. app.netlify.com → *Add new site → Import from Git* → dieses Repo.
   **Base directory:** `tabano-website`, **Publish directory:** `tabano-website/public`, Build command leer.
2. *Domain management*: `tabano-stuttgart.de` und `www.tabano-stuttgart.de` hinzufügen, DNS beim
   Domain-Anbieter umstellen, *HTTPS → Force HTTPS*. `netlify.toml` leitet `http://` und `www.` um und setzt
   HSTS und die Sicherheits-Header (Content-Security-Policy u. a.).
3. Alte Adressen (`/Tischreservierung/`, `/Speisekarte`, `/Kontakt` …) leiten per 301 auf die neuen Seiten.
4. Search Console: Domain bestätigen, `https://tabano-stuttgart.de/sitemap.xml` einreichen.

Liegt die Seite stattdessen bei einem Apache-Hoster, übernimmt `public/.htaccess` dieselben Aufgaben.

## Statistik

Google Analytics 4: Messungs-ID (`G-…`) in `config.js` bei `ga4Id` eintragen. Geladen wird erst nach
Zustimmung im Cookie-Banner (Consent Mode, IP gekürzt, keine Werbefunktionen). Gemessen werden zusätzlich
`reservierung_klick`, `reservierung_gesendet`, `anfrage_gesendet` und `anruf`. In GA4 unter
*Verwaltung → Datenaufbewahrung* 14 Monate einstellen (so steht es in der Datenschutzerklärung).

## Checkliste

| # | Punkt | Umsetzung |
|---|---|---|
| 1 | Datenschutzerklärung | `/datenschutz/`, alle Dienste einzeln (Hosting, Reservierung, Maps, Analytics, Bewertungen) |
| 2 | AGB | `/agb/`, Reservierung, Storno, Gruppen, Gutscheine |
| 3 | Keine Geheimnisse im Frontend | API-Schlüssel und E-Mails in Skripteigenschaften; `npm run pruefen` sucht nach Schlüsseln |
| 4 | HTTPS erzwingen | `netlify.toml` / `.htaccess`: Umleitung, HSTS, `upgrade-insecure-requests` |
| 5 | Cookie-Banner | Gleichwertige Knöpfe, Einstellungen je Kategorie, jederzeit im Footer änderbar, nichts lädt vorher |
| 6 | Meta-Titel und Beschreibungen | je Seite eindeutig, Länge geprüft |
| 7 | Social-Vorschau | Open Graph und Twitter Card, `og.jpg` 1200 × 630 |
| 8 | Favicon | SVG, ICO, Apple-Touch-Icon, Web-Manifest |
| 9 | Sitemap und robots.txt | werden beim Build erzeugt |
| 10 | Alt-Texte | an jedem Bild, geprüft |
| 11 | Bilder komprimiert | WebP 800/1600 px + JPG, responsive `srcset`, Lazy Loading, ohne EXIF/GPS |
| 12 | Ladegeschwindigkeit | Lighthouse mobil: Performance 98, CLS 0, Schriften lokal und vorgeladen |
| 13 | Farbkontrast | WCAG AA in hell und dunkel, geprüft (mind. 5,4 : 1 für Text) |
| 14 | Mobilfreundlich | ab 320 px, feste Leiste „Anrufen / Reservieren“, Tippflächen ≥ 44 px |
| 15 | Eigene 404-Seite | `404.html` mit Wegen zu Reservierung, Karte, Start |
| 16 | Defekte Links | `npm run pruefen` prüft Links, Dateien und Anker; alte Adressen per 301 |
| 17 | Formular-Validierung | im Browser mit Fehlern am Feld, im Apps Script noch einmal serverseitig |
| 18 | Spam-Schutz | Honeypot, Zeitsperre, Drosselung, Kapazitätsprüfung unter Sperre |
| 19 | Analytik | GA4 nach Einwilligung, Ereignisse für Reservierung und Anrufe |
| 20 | Klarer Aufruf zum Handeln | „Tisch reservieren“ in Kopfzeile, Hero, Band, Mobilleiste |

Außerdem: strukturierte Daten (Restaurant mit Zeiten und Speisekarte), Google Maps erst nach Klick,
Schriften ohne Google-Fonts-Verbindung, Tastaturbedienung mit sichtbarem Fokus und Sprunglink.
