/**
 * Google Sheet ohne Google-Login für ein Kunden-Werkzeug (z. B. /tintenblut/). Die Seite ruft diese Web-App
 * auf, die Web-App läuft als Eigentümer der Tabelle und reicht genau die Aufrufe weiter, die die App braucht
 * (SheetsApi in src/data/sheets/sheetsClient.ts). Gegenstück in der App: src/data/sheets/scriptSheets.ts.
 *
 * Schutz: Nur die Social-Tabs, `listen` und `einstellungen` sind erreichbar, und nur die Strukturänderungen,
 * die die Einrichtung braucht. Ist in den Skript-Eigenschaften ZUGANGSCODE gesetzt, muss er mitkommen.
 * Einrichtung siehe README.md.
 */

var ERLAUBTE_TABS = ['social_plan', 'social_inhalte', 'social_hooks', 'social_aufgaben', 'social_texte', 'social_werte', 'social_dms', 'listen', 'einstellungen'];
var ERLAUBTE_STRUKTUR = ['addSheet', 'repeatCell', 'updateSheetProperties', 'addProtectedRange', 'appendDimension'];

function doPost(e) {
  try {
    var anfrage = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    var code = PropertiesService.getScriptProperties().getProperty('ZUGANGSCODE');
    if (code && anfrage.code !== code) return antwort({ ok: false, art: 'zugang', fehler: 'Der Zugangscode stimmt nicht.' });
    return antwort({ ok: true, daten: fuehreAus(anfrage.op, anfrage.args || {}) });
  } catch (fehler) {
    var text = String((fehler && fehler.message) || fehler);
    // Ein Tab, den es noch nicht gibt: die App richtet ihn dann ein.
    if (/Unable to parse range/i.test(text)) return antwort({ ok: false, art: 'schema', fehler: text });
    console.error(fehler);
    return antwort({ ok: false, art: 'fehler', fehler: text });
  }
}

/** Lebenszeichen im Browser: Adresse öffnen, dann steht hier „bereit“. */
function doGet() {
  return antwort({ ok: true, daten: 'Social-Media-Sheet bereit.' });
}

function fuehreAus(op, a) {
  var id = tabellenId();
  var V = Sheets.Spreadsheets.Values;
  switch (op) {
    case 'getValues':
      pruefeBereich(a.range);
      return V.get(id, a.range, { valueRenderOption: 'UNFORMATTED_VALUE' }).values || [];
    case 'batchGetValues':
      a.ranges.forEach(pruefeBereich);
      var antwort = V.batchGet(id, { ranges: a.ranges, valueRenderOption: 'UNFORMATTED_VALUE' });
      return a.ranges.map(function (_, i) {
        var bereich = antwort.valueRanges && antwort.valueRanges[i];
        return (bereich && bereich.values) || [];
      });
    case 'updateValues':
      pruefeBereich(a.range);
      return mitSperre(function () {
        V.update({ range: a.range, values: a.values }, id, a.range, { valueInputOption: 'RAW' });
      });
    case 'batchUpdateValues':
      a.data.forEach(function (d) {
        pruefeBereich(d.range);
      });
      return mitSperre(function () {
        V.batchUpdate({ valueInputOption: 'RAW', data: a.data }, id);
      });
    case 'appendValues':
      pruefeBereich(a.range);
      return mitSperre(function () {
        V.append({ values: a.values }, id, a.range, { valueInputOption: 'RAW', insertDataOption: 'INSERT_ROWS' });
      });
    case 'getSpreadsheet':
      return Sheets.Spreadsheets.get(id, {
        fields: 'properties(title),sheets(properties(sheetId,title,gridProperties),protectedRanges(protectedRangeId))',
      });
    case 'batchUpdate':
      a.requests.forEach(pruefeStruktur);
      return mitSperre(function () {
        Sheets.Spreadsheets.batchUpdate({ requests: a.requests }, id);
      });
    default:
      throw new Error('Unbekannte Aktion: ' + op);
  }
}

/** 'social_plan'!A1:ZZ → social_plan; alles andere in der Tabelle bleibt unerreichbar. */
function pruefeBereich(bereich) {
  var tab = String(bereich || '').split('!')[0].replace(/^'/, '').replace(/'$/, '').replace(/''/g, "'");
  if (ERLAUBTE_TABS.indexOf(tab) === -1) throw new Error('Kein Zugriff auf den Tab „' + tab + '“.');
}

function pruefeStruktur(anfrage) {
  var art = Object.keys(anfrage || {})[0];
  if (ERLAUBTE_STRUKTUR.indexOf(art) === -1) throw new Error('Diese Änderung ist nicht erlaubt: ' + art);
  if (art === 'addSheet' && ERLAUBTE_TABS.indexOf(anfrage.addSheet.properties.title) === -1) {
    throw new Error('Dieser Tab darf nicht angelegt werden: ' + anfrage.addSheet.properties.title);
  }
}

/** Zwei Personen, die gleichzeitig speichern, dürfen nicht dieselbe Zeile beschreiben. */
function mitSperre(schreibe) {
  var sperre = LockService.getScriptLock();
  sperre.waitLock(30000);
  try {
    schreibe();
    return null;
  } finally {
    sperre.releaseLock();
  }
}

function tabellenId() {
  var id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  return id || SpreadsheetApp.getActive().getId();
}

function antwort(inhalt) {
  return ContentService.createTextOutput(JSON.stringify(inhalt)).setMimeType(ContentService.MimeType.JSON);
}
