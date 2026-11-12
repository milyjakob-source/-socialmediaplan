import { SITE } from '../site.mjs';

export default {
  id: 'legal',
  slug: 'datenschutz/',
  priority: 0.2,
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Osteria Fratelli in Stuttgart-Degerloch: welche Daten wir bei Besuch, Reservierung und Anfrage verarbeiten.',
  body: () => `
<section class="wrap page-hero"><h1>Datenschutz&shy;erklärung</h1><p class="lead">Stand: November 2026</p></section>
<div class="wrap legal-text">
  <h2>1. Verantwortlicher</h2>
  <p>${SITE.langName}, Inhaber ${SITE.inhaber.join(' und ')}, ${SITE.strasse}, ${SITE.plz} ${SITE.ort}<br>
  Telefon ${SITE.telefonAnzeige}, E-Mail <a href="mailto:${SITE.email}">${SITE.email}</a></p>
  <p>Einen Datenschutzbeauftragten müssen wir nach Art. 37 DSGVO und § 38 BDSG nicht benennen.</p>

  <h2>2. Ihre Rechte</h2>
  <p>Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen, auf dieser Website über „Cookie-Einstellungen“ im Footer. Sie können sich außerdem bei einer Aufsichtsbehörde beschweren, zum Beispiel beim Landesbeauftragten für den Datenschutz und die Informationsfreiheit Baden-Württemberg, Lautenschlagerstraße 20, 70173 Stuttgart.</p>

  <h2>3. Hosting und Server-Protokolle</h2>
  <p>Diese Website wird bei Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, USA gehostet. Beim Aufruf verarbeitet der Server technisch notwendige Daten: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Referrer, Browser und Betriebssystem. Das dient der sicheren Auslieferung der Seite (Art. 6 Abs. 1 lit. f DSGVO). Netlify ist unter dem EU-US Data Privacy Framework zertifiziert; zusätzlich haben wir einen Auftragsverarbeitungsvertrag mit Standardvertragsklauseln geschlossen. Protokolle werden nach spätestens 30 Tagen gelöscht.</p>
  <p>Die Verbindung ist per TLS verschlüsselt (erkennbar an „https://“).</p>

  <h2>4. Speicher im Browser</h2>
  <p>Wir setzen keine Werbe- oder Tracking-Cookies ohne Ihre Einwilligung. Im lokalen Speicher Ihres Browsers legen wir nur ab, was für die Funktion nötig ist: Ihren gewählten Farbmodus (<code>fratelli.theme</code>) und Ihre Cookie-Auswahl (<code>fratelli.consent</code>). Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG. Die Einträge bleiben, bis Sie sie im Browser löschen.</p>
  <p>Schriften liegen auf unserem eigenen Server; beim Laden der Seite wird keine Verbindung zu Google Fonts aufgebaut.</p>

  <h2 id="reservierung">5. Telefonische Reservierung</h2>
  <p>Wenn Sie telefonisch einen Tisch reservieren, notieren wir Name, Datum, Uhrzeit, Personenzahl und, falls Sie sie nennen, Telefonnummer, E-Mail-Adresse und Anmerkungen, um die Reservierung durchzuführen (Art. 6 Abs. 1 lit. b DSGVO). Freiwillige Angaben zu Allergien verarbeiten wir nur, weil Sie sie uns mitteilen (Art. 9 Abs. 2 lit. a DSGVO).</p>
  <p>Wir löschen Reservierungsdaten 90 Tage nach dem Reservierungstermin automatisch, soweit keine gesetzlichen Aufbewahrungspflichten bestehen.</p>

  <h2 id="kontakt">6. Anfrageformular und E-Mail</h2>
  <p>Anfragen über das Formular oder per E-Mail verarbeiten wir, um sie zu beantworten (Art. 6 Abs. 1 lit. b DSGVO bei Anfragen zu einem Vertrag, sonst lit. f). Die Daten werden über Netlify Forms bei unserem Hoster Netlify gespeichert und uns per E-Mail weitergeleitet. Wir löschen Anfragen, wenn sie erledigt sind, spätestens nach 12 Monaten, sofern keine Aufbewahrungspflichten bestehen.</p>
  <p>Zum Schutz vor Spam enthalten die Formulare ein unsichtbares Feld und eine Zeitprüfung. Dabei werden keine zusätzlichen Daten erhoben.</p>

  <h2 id="bewertungen">7. Google-Bewertungen und Fotos von Google</h2>
  <p>Auf der Website zeigen wir Bewertungen, die Gäste auf Google über uns veröffentlicht haben, sowie Fotos aus unserem Google-Unternehmensprofil. Die Bewertungen und die Liste der Fotos ruft unser eigenes Skript bei Google ab (Google Ireland Limited); angezeigt werden der öffentliche Anzeigename, die Sternebewertung, der Text, das Datum und bei Fotos der Name der Urheberin oder des Urhebers.</p>
  <p>Die Fotos selbst lädt Ihr Browser direkt von Googles Bildservern (googleusercontent.com). Dabei wird Ihre IP-Adresse an Google übertragen; Cookies werden dabei nicht gesetzt. Rechtsgrundlage ist unser berechtigtes Interesse, unser Restaurant mit aktuellen Bildern darzustellen (Art. 6 Abs. 1 lit. f DSGVO). Dasselbe gilt für die Tageskarte und die Neuigkeiten: Diese Bilder legen wir in Google Drive ab; beim Aufruf der jeweiligen Seite fragt Ihr Browser über ein Google-Skript (Google Apps Script) die aktuellen Bilder ab und lädt sie von googleusercontent.com. Auch dabei wird Ihre IP-Adresse an Google übertragen, Cookies werden nicht gesetzt.</p>

  <h2 id="maps">8. Google Maps</h2>
  <p>Auf der Start- und Kontaktseite können Sie eine Karte von Google Maps laden (Google Ireland Limited). Die Karte wird erst geladen, wenn Sie auf „Karte laden“ klicken oder in den Cookie-Einstellungen „Externe Medien“ erlauben. Dann überträgt Ihr Browser unter anderem Ihre IP-Adresse an Google; Google kann Cookies setzen. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Mehr bei Google: <a href="https://policies.google.com/privacy" rel="noopener" target="_blank">policies.google.com/privacy</a>.</p>

  <h2 id="analytics">9. Google Analytics 4</h2>
  <p>Nur wenn Sie in den Cookie-Einstellungen „Statistik“ erlauben, nutzen wir Google Analytics 4 (Google Ireland Limited), um zu verstehen, wie die Website genutzt wird, etwa wie viele Besucher die Speisekarte öffnen. Dabei werden Cookies gesetzt und pseudonyme Nutzungsdaten verarbeitet; IP-Adressen werden in der EU gekürzt. Werbefunktionen und Google Signals sind deaktiviert. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Die Daten werden nach 14 Monaten gelöscht. Sie können die Einwilligung jederzeit über „Cookie-Einstellungen“ widerrufen.</p>

  <h2>10. Links zu sozialen Netzwerken</h2>
  <p>Wir verlinken auf unsere Seiten bei Facebook und Instagram (@${SITE.instagramName}). Es handelt sich um einfache Links; Daten werden erst übertragen, wenn Sie einen Link anklicken.</p>

  <h2>11. Änderungen</h2>
  <p>Wir passen diese Erklärung an, wenn sich die Website oder die Rechtslage ändert. Es gilt die jeweils hier veröffentlichte Fassung.</p>
</div>
`,
};
