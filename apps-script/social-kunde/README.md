# Social Media für Kund:innen: Google Sheet ohne Login

Die Kunden-Werkzeuge (derzeit `/tintenblut/`) haben keinen Google-Login. Sie lesen und schreiben ihr Google
Sheet über diese Apps-Script-Web-App, die als Eigentümer:in der Tabelle läuft. Die App dazu steht in
`src/tintenblut/`, der Adapter in `src/data/sheets/scriptSheets.ts`.

Ohne Web-App läuft `/tintenblut/` als **Vorschau**: Der ganze Plan ist geladen, Änderungen gehen beim Neuladen
verloren.

## Einrichten (einmalig, ca. 10 Minuten)

1. **Tabelle anlegen:** In Google Drive ein leeres Google Sheet anlegen, z. B. „Tintenblut Social Media“.
2. **Skript anlegen:** In der Tabelle *Erweiterungen → Apps Script*.
   - Inhalt von `Code.gs` in die Datei `Code.gs` kopieren.
   - *Projekteinstellungen* (Zahnrad) → „Manifestdatei ‚appsscript.json‘ im Editor anzeigen“ anhaken, dann den
     Inhalt von `appsscript.json` in diese Datei kopieren. Das schaltet den Dienst *Google Sheets API* ein.
   - Speichern.
3. **Zugangscode setzen (empfohlen):** *Projekteinstellungen → Skripteigenschaften → Eigenschaft hinzufügen*:
   `ZUGANGSCODE` mit einem Code, den ihr dem Kunden gebt. Ohne Code kann jede Person mit dem Link den Plan
   ändern.
4. **Veröffentlichen:** *Bereitstellen → Neue Bereitstellung → Typ: Web-App*, „Ausführen als: Ich“,
   „Zugriff: Jeder“. Google fragt einmal nach der Freigabe („Erweitert → … öffnen (unsicher)“ ist bei eigenen
   Skripten normal). Die Adresse endet auf `/exec`.
5. **Mit der App verbinden:** Die `/exec`-Adresse in `src/tintenblut/config.ts` bei `WEB_APP_URL` eintragen
   und auf `main` pushen. Die Adresse ist kein Geheimnis, sie steht ohnehin im ausgelieferten JavaScript;
   geschützt werden die Daten durch den Zugangscode.
6. **Öffnen:** `https://<github-name>.github.io/-socialmediaplan/tintenblut/` → Zugangscode eingeben →
   „Plan übernehmen“. Die Tabellenblätter legt die App beim ersten Öffnen selbst an.

## Was die Web-App darf

Nur die Tabs `social_*`, `listen` und `einstellungen` lesen und schreiben, und nur die Strukturänderungen der
Einrichtung (Tab anlegen, Kopfzeile fett und fixiert, Warnhinweis gegen Bearbeiten von Hand). Andere Tabs in
derselben Tabelle bleiben unerreichbar.

Ändert sich `Code.gs`, im Editor *Bereitstellen → Bereitstellungen verwalten → Bearbeiten → Version: Neue
Version* wählen, damit die Adresse gleich bleibt.
