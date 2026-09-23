import type { SocialStartPlan } from '../data/socialStart';
import type { SocialAufgabeInput, SocialHookInput, SocialInhaltInput, SocialTextInput } from '../data/types';

/*
 * The 90-day plan for Tintenblut Tattoo (29.09. to 27.12.2026), as the client tool starts with it.
 * Only real facts: Predi, 20+ years, 4.8/5 on Google, the five real Google reviews, the seven portfolio
 * pieces of the website, address, hours, WhatsApp. No prices, no invented clients or work. Where material
 * or a sign-off is missing, the text says "[ERGÄNZEN: …]".
 */

const IG = { kanal: 'instagram', uhrzeit: '19:30' };
const STORY = { kanal: 'ig_story', uhrzeit: '' };
const GOOGLE = { kanal: 'google', uhrzeit: '' };

const CTA_SLIDE = { label: 'CTA', text: 'DEIN MOTIV. PREDIS HANDSCHRIFT.\n\nBeratung per WhatsApp – Link im Profil. Di–Fr, 13–19 Uhr, Stuttgart-Süd.', gestaltung: 'Vorlage B, Standard-CTA.', sprecher: '' };

const HASHTAGS_LOKAL = '#tattoostuttgart #stuttgarttattoo #tattoostudiostuttgart #stuttgartsüd #stuttgart #tattooartist';

// ─── Inhalte: zwölf Posts und acht Stories ───────────────────────────────────

export const TINTENBLUT_START_INHALTE: SocialInhaltInput[] = [
  {
    kennung: 'E1',
    art: 'einzelbild',
    serie: '',
    saeule: 4,
    titel: 'Ein Studio. Ein Künstler.',
    ziel: 'Das Profil in einem Bild erklären. Anheften auf Platz 1.',
    hook: 'EIN STUDIO. EIN KÜNSTLER. ÜBER 20 JAHRE.',
    slides: [
      {
        label: 'Bild',
        text: 'EIN STUDIO.\nEIN KÜNSTLER.\nÜBER 20 JAHRE.\n\nREALISTIK · BLACKWORK · CUSTOM · COVER-UP — STUTTGART-SÜD',
        gestaltung:
          '1080 × 1350 px, Vorlage T. Echtes Foto „Predi bei der Arbeit“ im Tafelrahmen (doppelte Haarlinie). Darüber Bodoni Moda Bold 88 pt, Knochen #f2ecdf, drei Zeilen. Darunter Space Mono 22 pt, Blutrot #dd5232.',
        sprecher: '',
      },
    ],
    caption:
      'Ich bin Predi. Seit über 20 Jahren tätowiere ich, heute in meinem Studio Tintenblut Tattoo im Art Quartal Tattoo in Stuttgart-Süd.\n\n' +
      'Ich arbeite allein. Jedes Motiv, das hier gezeigt wird, habe ich selbst entworfen und gestochen. Mein Schwerpunkt: Realistik in Black & Grey, Blackwork und Dotwork, individuelle Entwürfe und Cover-Ups.\n\n' +
      'Vorlagen von der Stange gibt es bei mir nicht. Jedes Stück entsteht im Gespräch mit dir.\n\n' +
      'Hier zeige ich fertige Arbeiten, wie sie entstehen und worauf es ankommt. Wenn du eine Idee hast: Schreib mir per WhatsApp, der Link ist im Profil.',
    cta: 'Folgen / WhatsApp',
    hashtags: `${HASHTAGS_LOKAL} #realismtattoo #blackworktattoo #coveruptattoo #germantattooartist`,
    alt_text: 'Ein Tätowierer arbeitet im Studio an einem Kunden, am Arbeitstisch stehen Farben und Material. Darüber der Text: Ein Studio. Ein Künstler. Über 20 Jahre.',
    ton: '',
    material: 'Foto „Predi bei der Arbeit“ (liegt vor, von der Website).',
    hinweis: 'Nach der Veröffentlichung anheften.',
    status: 'text',
  },
  {
    kennung: 'K1',
    art: 'karussell',
    serie: 'TAFEL #1',
    saeule: 1,
    titel: 'TAF. I – Zeus',
    ziel: 'Realistik-Können beweisen, Speicherungen, Profilbesuche, DM „MOTIV“.',
    hook: 'WEICHE ÜBERGÄNGE ENTSTEHEN NICHT ZUFÄLLIG.',
    slides: [
      { label: '1 (Hook)', text: 'WEICHE ÜBERGÄNGE ENTSTEHEN NICHT ZUFÄLLIG.', gestaltung: 'Duotone-Version des Zeus-Stücks (von der Website), Hook in Bodoni Moda darüber, Label „TAF. I“ oben links.', sprecher: '' },
      { label: '2', text: '', gestaltung: 'Das ganze Stück, Originalfoto im Tafelrahmen. Legende: „TAF. I — Realistik, Zeus, Oberschenkel“.', sprecher: '' },
      { label: '3', text: 'DETAIL · GESICHT', gestaltung: 'Ausschnitt Gesicht, 2× vergrößert, Tafelrahmen.', sprecher: '' },
      { label: '4', text: 'DETAIL · STRUKTUR', gestaltung: 'Zweiter Ausschnitt (Faltenwurf/Stein).', sprecher: '' },
      { label: '5', text: 'BLACK & GREY LEBT VOM KONTRAST.\n\nTiefe Schwärzen, dazwischen feine Grautöne. So bleibt ein Motiv auch in 15 Jahren lesbar.', gestaltung: 'Vorlage K.', sprecher: '' },
      CTA_SLIDE,
    ],
    caption:
      'Realistik in Black & Grey heißt nicht: möglichst viel Grau. Es heißt: die richtigen Schwärzen an die richtigen Stellen, damit das Motiv Tiefe hat und über Jahre lesbar bleibt.\n\n' +
      'Dieser Zeus am Oberschenkel zeigt, worauf es mir ankommt: weiche Übergänge, klare Lichtkanten, keine harten Brüche in der Schattierung.\n\n' +
      'Swipe für die Details.\n\n' +
      'Du willst ein Realistik-Stück? Schreib mir MOTIV per DM oder direkt per WhatsApp (Link im Profil).',
    cta: 'DM „MOTIV“',
    hashtags: '#realismtattoo #blackandgreytattoo #blackandgrey #realistictattoo #zeustattoo #greekmythologytattoo #thightattoo #tattoostuttgart #stuttgarttattoo #tattooartist',
    alt_text: 'Realistisches Black-and-Grey-Tattoo einer Zeus-Statue auf einem Oberschenkel, dazu Nahaufnahmen der Schattierung.',
    ton: '',
    material: 'Zeus-Foto und Duotone-Version (liegen vor, von der Website).',
    hinweis: 'Slide 5 ist eine allgemeine Aussage, Predi prüft die Formulierung.',
    status: 'text',
  },
  {
    kennung: 'R1',
    art: 'reel',
    serie: 'IM ENTSTEHEN #1',
    saeule: 1,
    titel: 'Vom Stencil zum Schatten',
    ziel: 'Reichweite, Profilbesuche. Länge 20 Sekunden.',
    hook: 'VOM STENCIL ZUM SCHATTEN.',
    slides: [
      { label: '0–2', text: 'VOM STENCIL ZUM SCHATTEN.', gestaltung: 'Stencil wird aufgelegt und abgezogen.', sprecher: '' },
      { label: '2–7', text: '1 · LINIEN', gestaltung: 'Linework-Clip, beschleunigt.', sprecher: '' },
      { label: '7–13', text: '2 · SCHATTIERUNG', gestaltung: 'Schattierungs-Clip, beschleunigt.', sprecher: '' },
      { label: '13–18', text: '3 · FERTIG', gestaltung: 'Langsamer Schwenk über das fertige Stück.', sprecher: '' },
      { label: '18–20', text: 'TINTENBLUT · STUTTGART', gestaltung: 'Endcard Vorlage T mit Logo.', sprecher: '' },
    ],
    caption:
      'Vier Stunden Arbeit, zwanzig Sekunden Video. Vom Stencil über die Linien bis zur letzten Schattierung.\n\n' +
      'Was man im Zeitraffer nicht sieht: die Beratung davor, den Entwurf und die Geduld dazwischen. Genau die machen am Ende den Unterschied.\n\n' +
      'Welche Idee trägst du schon lange mit dir herum? Schreib mir per WhatsApp, der Link ist im Profil.',
    cta: 'WhatsApp',
    hashtags: '#tattooprocess #tattootimelapse #realismtattoo #blackandgreytattoo #tattoovideo #tattoostuttgart #stuttgarttattoo #tattooartist',
    alt_text: 'Zeitraffer einer Tattoo-Sitzung: Stencil, Linien, Schattierung, fertiges Motiv.',
    ton: 'Ruhiger, dunkler Beat aus der Instagram-Bibliothek, dazu das Originalgeräusch der Maschine. Kein Trend-Audio.',
    material: '[ERGÄNZEN: Clips aus der nächsten größeren Sitzung] – nur mit Einwilligung, Gesicht nicht im Bild.',
    hinweis: 'Wartet auf Material bis 19.10.',
    status: 'wartet',
  },
  {
    kennung: 'K2',
    art: 'karussell',
    serie: 'COVER-UP-AKTE #1',
    saeule: 2,
    titel: '5 Fragen vor dem Cover-Up',
    ziel: 'Cover-Up-Fälle erreichen, Speicherungen, DM „COVER“.',
    hook: 'DEIN ALTES TATTOO MUSS NICHT BLEIBEN. ABER ES BESTIMMT MIT.',
    slides: [
      { label: '1 (Hook)', text: 'DEIN ALTES TATTOO MUSS NICHT BLEIBEN. ABER ES BESTIMMT MIT.\n\n5 Fragen, bevor du ein Cover-Up planst.', gestaltung: 'Vorlage B, Label „COVER-UP-AKTE #1“.', sprecher: '' },
      { label: '2', text: '1 · WIE DUNKEL IST ES?\n\nTiefe Schwärzen lassen sich nur mit noch mehr Schwarz überdecken. Blasse Linien geben mehr Freiheit.', gestaltung: 'Vorlage K, Nummer Bodoni Moda 120 pt Blutrot.', sprecher: '' },
      { label: '3', text: '2 · WIE GROSS DARF ES WERDEN?\n\nEin Cover-Up ist fast immer größer als das Original. Plane Platz ein.', gestaltung: 'Vorlage K.', sprecher: '' },
      { label: '4', text: '3 · WELCHER STIL PASST?\n\nRealistik und Blackwork können viel verstecken, feine Linien kaum.', gestaltung: 'Vorlage K.', sprecher: '' },
      { label: '5', text: '4 · IST DIE HAUT VERHEILT?\n\nNarben oder frische Laser-Behandlungen brauchen Zeit. Das klären wir vorher.', gestaltung: 'Vorlage K.', sprecher: '' },
      { label: '6', text: '5 · WAS SOLL BLEIBEN?\n\nManchmal wird das alte Motiv Teil des neuen. Manchmal verschwindet es ganz.', gestaltung: 'Vorlage K.', sprecher: '' },
      { label: '7 (CTA)', text: 'SCHICK MIR EIN FOTO.\n\nSchreib COVER per DM oder schick ein Foto deines Tattoos per WhatsApp. Ich sage dir ehrlich, was geht.', gestaltung: 'Vorlage B.', sprecher: '' },
    ],
    caption:
      'Ein Cover-Up ist kein Radiergummi. Das alte Tattoo bestimmt mit, was möglich ist: wie dunkel es ist, wie groß, wo es sitzt.\n\n' +
      'Bevor ich einen Entwurf mache, kläre ich deshalb fünf Dinge: Dunkelheit, Größe, Stil, Hautzustand und die Frage, ob etwas vom Alten bleiben soll.\n\n' +
      'Manchmal ist die ehrliche Antwort „größer“ oder „erst lasern“. Das sage ich dir lieber vorher als danach.\n\n' +
      'Schick mir ein Foto deines Tattoos per WhatsApp oder schreib COVER per DM.',
    cta: 'DM „COVER“ / Foto per WhatsApp',
    hashtags: '#coveruptattoo #coverup #tattoocoverup #coveruptattoos #blackworktattoo #realismtattoo #tattoostuttgart #stuttgarttattoo #tattooartist',
    alt_text: 'Karussell auf hellem Grund: fünf Fragen vor einem Cover-Up, nämlich Dunkelheit des alten Tattoos, Größe, Stil, Hautzustand und was bleiben soll.',
    ton: '',
    material: '',
    hinweis: 'Predi prüft alle fünf Aussagen fachlich, besonders Punkt 4 (Laser/Narben).',
    status: 'text',
  },
  {
    kennung: 'E2',
    art: 'einzelbild',
    serie: 'STIMMEN #1',
    saeule: 4,
    titel: 'Kunst kommt von Können',
    ziel: 'Social Proof, Shares.',
    hook: '„DORT WIRD EINEM BEWUSST, DASS KUNST VON ‚KÖNNEN‘ KOMMT!“',
    slides: [
      {
        label: 'Bild',
        text: '„DORT WIRD EINEM BEWUSST, DASS KUNST VON ‚KÖNNEN‘ KOMMT!“\n\n★★★★★ GOOGLE-REZENSION · 4,8 / 5 BEI GOOGLE',
        gestaltung: '1080 × 1350 px, Vorlage T. Zitat Bodoni Moda Bold 72 pt, Knochen. Darunter Space Mono Blutrot.',
        sprecher: '',
      },
    ],
    caption:
      '„Dort wird einem bewusst, dass Kunst von ‚Können‘ kommt! Zweifelsfreie Tätowierkunst.“\n\n' +
      'Einer der Sätze, die bei Google über Tintenblut stehen. Danke an alle, die sich die Zeit für eine Bewertung genommen haben. 4,8 von 5 Sternen sind für ein Ein-Mann-Studio keine Selbstverständlichkeit.\n\n' +
      'Du warst schon bei mir? Eine Google-Bewertung hilft mir mehr als jeder Like.',
    cta: 'Google-Bewertung',
    hashtags: `${HASHTAGS_LOKAL} #kundenstimmen`,
    alt_text: 'Dunkle Fläche mit einem Zitat aus einer Google-Rezension: Dort wird einem bewusst, dass Kunst von Können kommt. Darunter fünf Sterne und 4,8 von 5 bei Google.',
    ton: '',
    material: '',
    hinweis: 'Zitat wörtlich aus der Rezension, ohne Namen der Person.',
    status: 'text',
  },
  {
    kennung: 'K3',
    art: 'karussell',
    serie: 'FRAG PREDI #1',
    saeule: 3,
    titel: 'So läuft deine Anfrage',
    ziel: 'Hemmschwelle senken, WhatsApp-Anfragen. Anheften auf Platz 2.',
    hook: 'DU HAST EINE IDEE. SO WIRD EIN TATTOO DARAUS.',
    slides: [
      { label: '1 (Hook)', text: 'DU HAST EINE IDEE. SO WIRD EIN TATTOO DARAUS.', gestaltung: 'Vorlage T.', sprecher: '' },
      { label: '2', text: '1 · WHATSAPP\n\nSchreib mir deine Idee, Körperstelle, ungefähre Größe. Referenzbilder helfen.', gestaltung: 'Vorlage K, fünf Tafeln mit Haarlinien-Verbindung.', sprecher: '' },
      { label: '3', text: '2 · BERATUNG\n\nAuf Augenhöhe: was geht, was nicht, was besser wäre. Ehrlich.', gestaltung: 'Vorlage K.', sprecher: '' },
      { label: '4', text: '3 · ENTWURF\n\nDein Motiv entsteht für dich, nicht aus dem Katalog.', gestaltung: 'Vorlage K.', sprecher: '' },
      { label: '5', text: '4 · TERMIN\n\nDi–Fr, 13–19 Uhr, andere Zeiten auf Anfrage. Große Stücke in mehreren Sitzungen.', gestaltung: 'Vorlage K.', sprecher: '' },
      { label: '6', text: '5 · PFLEGE\n\nDu bekommst eine Anleitung mit nach Hause. Fragen danach sind jederzeit willkommen.', gestaltung: 'Vorlage K.', sprecher: '' },
      { label: '7 (CTA)', text: 'BÖBLINGER STR. 28 · STUTTGART-SÜD\n\nWhatsApp 01520 4683330 · Link im Profil', gestaltung: 'Vorlage B.', sprecher: '' },
    ],
    caption:
      'Viele schreiben erst, wenn die Idee „fertig“ ist. Musst du nicht. Eine grobe Vorstellung reicht.\n\n' +
      'So läuft es bei mir: Du schreibst per WhatsApp, wir sprechen über deine Idee, ich entwerfe dein Motiv, wir machen einen Termin. Danach bekommst du eine Pflegeanleitung mit.\n\n' +
      'Preise nenne ich nach der Beratung, weil jedes Stück anders ist.\n\n' +
      'Studio: Böblinger Str. 28, Stuttgart-Süd, im Art Quartal Tattoo. Dienstag bis Freitag, 13 bis 19 Uhr, andere Termine auf Anfrage.',
    cta: 'WhatsApp',
    hashtags: `${HASHTAGS_LOKAL} #customtattoo #tattooberatung`,
    alt_text: 'Karussell zum Ablauf einer Tattoo-Anfrage in fünf Schritten: WhatsApp, Beratung, Entwurf, Termin, Pflege. Am Ende Adresse und WhatsApp-Nummer des Studios in Stuttgart-Süd.',
    ton: '',
    material: '',
    hinweis: 'Nach der Veröffentlichung anheften. Predi bestätigt Ablauf und Nachsorge.',
    status: 'text',
  },
  {
    kennung: 'R2',
    art: 'reel',
    serie: '',
    saeule: 3,
    titel: 'Hygiene in 15 Sekunden',
    ziel: 'Vertrauen, Shares. Länge 15 Sekunden.',
    hook: 'BEVOR DIE NADEL DIE HAUT BERÜHRT:',
    slides: [
      { label: '0–2', text: 'BEVOR DIE NADEL DIE HAUT BERÜHRT:', gestaltung: 'Leerer Arbeitsplatz.', sprecher: '' },
      { label: '2–5', text: 'FLÄCHEN DESINFIZIERT', gestaltung: 'Wischen, Sprühen.', sprecher: '' },
      { label: '5–8', text: 'ALLES ABGEDECKT', gestaltung: 'Folie über Maschine, Kabel, Flasche.', sprecher: '' },
      { label: '8–11', text: 'NADELN EINWEG, VOR DEINEN AUGEN GEÖFFNET', gestaltung: 'Verpackung wird geöffnet.', sprecher: '' },
      { label: '11–13', text: 'FRISCHE HANDSCHUHE', gestaltung: 'Handschuhe anziehen.', sprecher: '' },
      { label: '13–15', text: 'TINTENBLUT · STUTTGART', gestaltung: 'Endcard.', sprecher: '' },
    ],
    caption:
      'Hygiene sieht man nicht im fertigen Tattoo. Aber sie entscheidet, wie es heilt.\n\n' +
      'Bei mir läuft das jedes Mal gleich: Flächen desinfizieren, alles abdecken, was ich anfasse, Einwegnadeln vor deinen Augen öffnen, frische Handschuhe.\n\n' +
      'Das ist kein Extra. Das ist die Grundlage.',
    cta: '',
    hashtags: `#tattoohygiene #tattoostudio #behindthescenes ${HASHTAGS_LOKAL}`,
    alt_text: 'Kurzvideo der Vorbereitung im Tattoostudio: Flächen werden desinfiziert, Geräte mit Folie abgedeckt, Einwegnadeln geöffnet, Handschuhe angezogen.',
    ton: 'Nur Originalgeräusche (Folie, Sprühflasche, Verpackung). Kein Musik-Overlay.',
    material: '[ERGÄNZEN: Aufnahme vor einer Sitzung, ca. 10 Min.]',
    hinweis: 'Predi bestätigt, dass die Schritte genau seiner Routine entsprechen.',
    status: 'wartet',
  },
  {
    kennung: 'K4',
    art: 'karussell',
    serie: 'FRAG PREDI #2',
    saeule: 3,
    titel: 'Die ersten 14 Tage',
    ziel: 'Speicherungen, DM „PFLEGE“.',
    hook: 'DAS TATTOO IST FERTIG. JETZT BIST DU DRAN.',
    slides: [
      { label: '1 (Hook)', text: 'DAS TATTOO IST FERTIG. JETZT BIST DU DRAN.\n\nDie ersten 14 Tage.', gestaltung: 'Vorlage T.', sprecher: '' },
      { label: '2', text: 'TAG 1\n\n[ERGÄNZEN: Predis Anweisung, z. B. Folie/Second Skin wie lange]', gestaltung: 'Vorlage K.', sprecher: '' },
      { label: '3', text: 'TAG 2–7\n\n[ERGÄNZEN: Waschen, Eincremen, womit]', gestaltung: 'Vorlage K.', sprecher: '' },
      { label: '4', text: 'TAG 7–14\n\nEs juckt und schuppt. Nicht kratzen, nicht abziehen.', gestaltung: 'Vorlage K.', sprecher: '' },
      { label: '5', text: '3 WOCHEN LANG MEIDEN\n\nSonne, Schwimmbad, Sauna.', gestaltung: 'Vorlage K.', sprecher: '' },
      { label: '6', text: 'IM ZWEIFEL\n\nRötung, Schwellung, Wärme, die zunimmt: Melde dich bei mir und geh zum Arzt.', gestaltung: 'Vorlage B.', sprecher: '' },
      { label: '7 (CTA)', text: 'PFLEGE-ANLEITUNG ALS PDF\n\nSchreib PFLEGE per DM.', gestaltung: 'Vorlage B.', sprecher: '' },
    ],
    caption:
      'Wie ein Tattoo in zehn Jahren aussieht, entscheidet sich zum Teil in den ersten zwei Wochen.\n\n' +
      'Swipe durch die wichtigsten Punkte. Das ist eine allgemeine Übersicht und ersetzt nicht meine Anleitung nach deinem Termin und keinen ärztlichen Rat.\n\n' +
      'Speicher dir den Post oder schreib PFLEGE per DM, dann bekommst du die Anleitung als PDF.',
    cta: 'DM „PFLEGE“',
    hashtags: '#tattoopflege #tattooaftercare #tattooheilung #frischgestochen #tattoostuttgart #stuttgarttattoo',
    alt_text: 'Karussell zur Tattoo-Pflege in den ersten 14 Tagen: erster Tag, erste Woche, Jucken und Schuppen, drei Wochen ohne Sonne, Schwimmbad und Sauna, bei Entzündungszeichen zum Arzt.',
    ton: '',
    material: 'Predis Pflegeanleitung als Text, daraus auch das PDF für das Stichwort PFLEGE.',
    hinweis: 'Pflegehinweise nur so, wie Predi sie selbst ausgibt. Keine Produktempfehlungen ohne Predis Okay.',
    status: 'wartet',
  },
  {
    kennung: 'R3',
    art: 'reel',
    serie: 'TAFEL #2',
    saeule: 1,
    titel: 'Dotwork: Mandala Rücken',
    ziel: 'Reichweite in der Blackwork/Dotwork-Nische. Länge 15 Sekunden.',
    hook: 'TAUSENDE PUNKTE. EIN MUSTER.',
    slides: [
      { label: '0–4', text: 'TAUSENDE PUNKTE.', gestaltung: 'Langsamer Zoom auf ein Detail des Mandala-Fotos (von der Website).', sprecher: '' },
      { label: '4–9', text: 'KEIN STRICH GEZOGEN.', gestaltung: 'Zoom zieht auf, Muster wird sichtbar.', sprecher: '' },
      { label: '9–13', text: 'DOTWORK · TAF. VI', gestaltung: 'Gesamtbild im Tafelrahmen.', sprecher: '' },
      { label: '13–15', text: 'TINTENBLUT · STUTTGART', gestaltung: 'Endcard.', sprecher: '' },
    ],
    caption:
      'Dotwork heißt: Die Fläche entsteht aus Punkten, nicht aus Linien. Das braucht Zeit und eine ruhige Hand, aber es ergibt Übergänge, die man mit keiner anderen Technik so bekommt.\n\n' +
      'Dieses Mandala zieht sich über den ganzen Rücken.\n\n' +
      'Blackwork oder Dotwork im Kopf? Schreib MOTIV per DM.',
    cta: 'DM „MOTIV“',
    hashtags: '#dotwork #dotworktattoo #mandalatattoo #blackworktattoo #backtattoo #geometrictattoo #tattoostuttgart #stuttgarttattoo',
    alt_text: 'Kamerafahrt über ein großflächiges Mandala-Tattoo in Dotwork-Technik auf einem Rücken.',
    ton: 'Ruhiger, dunkler Loop.',
    material: 'Mandala-Foto (liegt vor, von der Website).',
    hinweis: '',
    status: 'text',
  },
  {
    kennung: 'E3',
    art: 'einzelbild',
    serie: '',
    saeule: 2,
    titel: 'Keine Vorlagen von der Stange',
    ziel: 'Haltung, Shares.',
    hook: 'KEINE VORLAGEN VON DER STANGE.',
    slides: [
      {
        label: 'Bild',
        text: 'KEINE\nVORLAGEN\nVON DER\nSTANGE.',
        gestaltung: '1080 × 1350 px, Vorlage T. Vier Zeilen Bodoni Moda 92 pt, „STANGE.“ in Blutrot #dd5232. Unten links „TINTENBLUT · STUTTGART“ in Space Mono.',
        sprecher: '',
      },
    ],
    caption:
      'Ein Motiv aus dem Katalog trägt vielleicht schon jemand anderes. Deins nicht.\n\n' +
      'Bei mir gibt es keine Flash-Wand. Du bringst eine Idee mit, ein Gefühl, ein paar Referenzbilder. Daraus entwickeln wir gemeinsam einen Entwurf, der zu dir und zu der Körperstelle passt.\n\n' +
      'Das dauert etwas länger. Dafür ist es danach deins.',
    cta: '',
    hashtags: `#customtattoo #tattoodesign ${HASHTAGS_LOKAL}`,
    alt_text: 'Dunkle Fläche mit heller Schrift: Keine Vorlagen von der Stange. Das Wort Stange ist rot hervorgehoben.',
    ton: '',
    material: '',
    hinweis: '',
    status: 'text',
  },
  {
    kennung: 'K5',
    art: 'karussell',
    serie: 'VON DER IDEE ZUR HAUT #1',
    saeule: 2,
    titel: 'Portrait & Maske',
    ziel: 'Custom-Prozess beweisen. Stärkstes Stück für neue Profilbesucher.',
    hook: 'EINE IDEE. EIN ENTWURF. EIN BEIN.',
    slides: [
      { label: '1 (Hook)', text: 'EINE IDEE. EIN ENTWURF. EIN BEIN.', gestaltung: 'Fertiges Stück (Foto „Portrait & Maske“ von der Website).', sprecher: '' },
      { label: '2', text: 'DIE IDEE\n\n[ERGÄNZEN: 1–2 Sätze, womit die Person kam]', gestaltung: 'Referenz, nur mit Einwilligung.', sprecher: '' },
      { label: '3', text: 'DER ENTWURF', gestaltung: '[ERGÄNZEN: Skizze/Entwurf]', sprecher: '' },
      { label: '4', text: 'AUF DER HAUT', gestaltung: 'Stencil-Foto, falls vorhanden.', sprecher: '' },
      { label: '5', text: 'DAS ERGEBNIS', gestaltung: 'Foto im Tafelrahmen, „TAF. V — Custom, Portrait & Maske“.', sprecher: '' },
      CTA_SLIDE,
    ],
    caption: '[ERGÄNZEN nach Freigabe] Aufbau: Idee → was im Entwurf entschieden wurde → Ergebnis → „Schreib mir deine Idee per WhatsApp“.',
    cta: 'WhatsApp',
    hashtags: '#customtattoo #realismtattoo #portraittattoo #legtattoo #tattoodesign #tattoostuttgart #stuttgarttattoo',
    alt_text: 'Karussell vom Entwurf zum fertigen Tattoo: ein Frauenportrait mit Maske auf einem Bein.',
    ton: '',
    material: 'Foto liegt vor. Fehlt: Skizze/Entwurf, Einwilligung der Person.',
    hinweis: 'Fehlen Entwurf oder Einwilligung bis 20.10., erscheint stattdessen TAF. II (Tiger & Totenkopf) im Aufbau von K1.',
    status: 'wartet',
  },
  {
    kennung: 'R4',
    art: 'reel',
    serie: 'TAFEL',
    saeule: 1,
    titel: 'Sieben Tafeln',
    ziel: 'Portfolio-Überblick für neue Besucher, Reichweite, Kommentare. Länge 12 Sekunden.',
    hook: '7 ARBEITEN. 4 DISZIPLINEN. 1 KÜNSTLER.',
    slides: [
      { label: '0–1,5', text: '7 ARBEITEN. 4 DISZIPLINEN. 1 KÜNSTLER.', gestaltung: 'Vorlage T.', sprecher: '' },
      {
        label: '1,5–10,5',
        text: 'TAF. I — Realistik, Zeus\nTAF. II — Blackwork, Tiger & Totenkopf\nTAF. III — Realistik, Auge\nTAF. IV — Realistik, Löwe\nTAF. V — Custom, Portrait & Maske\nTAF. VI — Dotwork, Mandala\nTAF. VII — Dotwork, Polynesisches Sleeve',
        gestaltung: 'Die 7 Galerie-Fotos, je 1,5 Sek., harte Schnitte im Beat, jedes im Tafelrahmen mit Legende.',
        sprecher: '',
      },
      { label: '10,5–12', text: 'TINTENBLUT · STUTTGART', gestaltung: 'Endcard.', sprecher: '' },
    ],
    caption: 'Realistik, Blackwork, Dotwork, Custom. Sieben Arbeiten aus dem Studio, alle von mir entworfen und gestochen.\n\nWelche ist dein Favorit? Schreib die Nummer in die Kommentare.',
    cta: 'Kommentar',
    hashtags: '#tattooportfolio #realismtattoo #blackworktattoo #dotwork #customtattoo #tattoostuttgart #stuttgarttattoo #tattooartist',
    alt_text: 'Schnelle Abfolge von sieben Tattoos im Bilderrahmen-Stil: Zeus, Tiger und Totenkopf, Auge, Löwe, Portrait mit Maske, Mandala, polynesisches Sleeve.',
    ton: 'Harter, langsamer Beat, Schnitt auf jeden Schlag.',
    material: 'Alle 7 Galerie-Fotos (liegen vor, von der Website).',
    hinweis: '',
    status: 'text',
  },

  // Stories
  {
    kennung: 'S1', art: 'story', serie: 'Umfrage', saeule: 1, titel: 'Was schwirrt dir im Kopf?',
    ziel: 'Zielgruppe sortieren, Interaktion.', hook: 'WAS FÜR EIN TATTOO SCHWIRRT DIR IM KOPF?',
    slides: [{ label: 'Frame 1', text: 'WAS FÜR EIN TATTOO SCHWIRRT DIR IM KOPF?', gestaltung: 'Vorlage B.', sprecher: '' }],
    caption: '', cta: '', hashtags: '', alt_text: '',
    ton: 'Quiz-Sticker ohne richtige Antwort: Realistik · Blackwork/Dotwork · Cover-Up · Noch keine Ahnung.', material: '', hinweis: '', status: 'text',
  },
  {
    kennung: 'S2', art: 'story', serie: 'Richtig oder falsch', saeule: 3, titel: 'Sonne',
    ziel: 'Einen Pflege-Irrtum geraderücken.', hook: 'FRISCHE TATTOOS BRAUCHEN SONNE ZUM HEILEN.',
    slides: [
      { label: 'Frame 1', text: 'FRISCHE TATTOOS BRAUCHEN SONNE ZUM HEILEN.', gestaltung: 'Aussage in Bodoni Moda auf Vorlage B.', sprecher: '' },
      { label: 'Frame 2', text: 'Falsch. Sonne ist in den ersten Wochen der größte Feind eines frischen Tattoos. Abdecken, Schatten. – Predi', gestaltung: 'Auflösung auf Vorlage K.', sprecher: '' },
    ],
    caption: '', cta: '', hashtags: '', alt_text: '', ton: 'Quiz-Sticker „Richtig“ / „Falsch“.', material: '', hinweis: '', status: 'text',
  },
  {
    kennung: 'S3', art: 'story', serie: 'Aus dem Studio', saeule: 1, titel: 'Stencil auf der Haut',
    ziel: 'Nähe, echte Arbeit zeigen.', hook: 'HEUTE 5 STUNDEN BLACK & GREY.',
    slides: [{ label: 'Frame 1', text: 'HEUTE 5 STUNDEN BLACK & GREY.', gestaltung: 'Stencil auf der Haut, Arbeitsplatz vorbereitet.', sprecher: '' }],
    caption: '', cta: '', hashtags: '', alt_text: '', ton: 'Emoji-Slider 🖤.', material: 'Live-Foto aus dem Studio, nur mit Einwilligung.', hinweis: '', status: 'text',
  },
  {
    kennung: 'S4', art: 'story', serie: 'Freitagsfrage', saeule: 4, titel: 'Fragen an Predi',
    ziel: 'Material für FRAG-PREDI-Posts sammeln.', hook: 'WAS WOLLTEST DU EINEN TÄTOWIERER SCHON IMMER FRAGEN?',
    slides: [{ label: 'Frame 1', text: 'WAS WOLLTEST DU EINEN TÄTOWIERER SCHON IMMER FRAGEN?', gestaltung: 'Vorlage B.', sprecher: '' }],
    caption: '', cta: '', hashtags: '', alt_text: '', ton: 'Fragesticker. Antworten am Dienstag, je Antwort ein Frame, „– Predi“.', material: '', hinweis: '', status: 'text',
  },
  {
    kennung: 'S5', art: 'story', serie: 'Richtig oder falsch', saeule: 2, titel: 'Jedes Tattoo überdeckbar?',
    ziel: 'Erwartungen an Cover-Ups ehrlich setzen.', hook: 'JEDES ALTE TATTOO LÄSST SICH ÜBERDECKEN.',
    slides: [
      { label: 'Frame 1', text: 'JEDES ALTE TATTOO LÄSST SICH ÜBERDECKEN.', gestaltung: 'Vorlage B.', sprecher: '' },
      { label: 'Frame 2', text: 'Nicht jedes. Sehr dunkle oder große Stücke brauchen manchmal erst Laser. Schick mir ein Foto, ich sag’s dir ehrlich. – Predi', gestaltung: 'Vorlage K.', sprecher: '' },
    ],
    caption: '', cta: '', hashtags: '', alt_text: '', ton: 'Quiz-Sticker.', material: '', hinweis: 'Predi bestätigt die Auflösung.', status: 'text',
  },
  {
    kennung: 'S6', art: 'story', serie: 'Umfrage', saeule: 2, titel: 'Tattoo loswerden?',
    ziel: 'Cover-Up-Bedarf messen, DMs auslösen.', hook: 'HAST DU EIN TATTOO, DAS DU LOSWERDEN WILLST?',
    slides: [{ label: 'Frame 1', text: 'HAST DU EIN TATTOO, DAS DU LOSWERDEN WILLST?', gestaltung: 'Reshare K2.', sprecher: '' }],
    caption: '', cta: '', hashtags: '', alt_text: '', ton: 'Umfrage: Ja · Nein · Vielleicht.', material: '', hinweis: '', status: 'text',
  },
  {
    kennung: 'S7', art: 'story', serie: 'Frisch vs. verheilt', saeule: 1, titel: 'Frisch vs. verheilt',
    ziel: 'Zeigen, wie Predis Arbeit verheilt.', hook: 'FRISCH GESTOCHEN. UND SO SIEHT ES HEUTE AUS.',
    slides: [
      { label: 'Frame 1', text: 'FRISCH GESTOCHEN.', gestaltung: 'Foto direkt nach der Sitzung.', sprecher: '' },
      { label: 'Frame 2', text: 'UND SO SIEHT ES HEUTE AUS.', gestaltung: 'Gleiche Stelle beim Nachstechtermin.', sprecher: '' },
    ],
    caption: '', cta: '', hashtags: '', alt_text: '', ton: 'Umfrage: Hättest du’s gedacht? Ja · Nein.',
    material: '[ERGÄNZEN: Foto frisch + verheilt, mit Einwilligung]', hinweis: '', status: 'wartet',
  },
  {
    kennung: 'S8', art: 'story', serie: 'Richtig oder falsch', saeule: 3, titel: 'Farbe vs. Black & Grey',
    ziel: 'Einen häufigen Irrtum klären.', hook: 'FARBE HÄLT LÄNGER ALS BLACK & GREY.',
    slides: [
      { label: 'Frame 1', text: 'FARBE HÄLT LÄNGER ALS BLACK & GREY.', gestaltung: 'Vorlage B.', sprecher: '' },
      { label: 'Frame 2', text: '[ERGÄNZEN: Predis Antwort in 2 Sätzen] – Predi', gestaltung: 'Vorlage K.', sprecher: '' },
    ],
    caption: '', cta: '', hashtags: '', alt_text: '', ton: 'Quiz-Sticker.', material: '', hinweis: 'Wartet auf Predis Antwort.', status: 'wartet',
  },
];

// ─── Redaktionsplan 29.09. bis 27.10.2026 ────────────────────────────────────

export const TINTENBLUT_START_PLAN: SocialStartPlan[] = [
  { ...IG, datum: '2026-09-29', format: 'einzelbild', saeule: 4, thema: '„Ein Studio. Ein Künstler.“ (anheften)', kennung: 'E1', status: 'in_arbeit', hinweis: 'Design offen', zustaendig: 'Betreuung' },
  { ...STORY, datum: '2026-09-29', format: 'story', saeule: 1, thema: 'Umfrage: Was schwirrt dir im Kopf?', kennung: 'S1', status: 'bereit', hinweis: 'Text fertig', zustaendig: 'Betreuung' },
  { ...STORY, datum: '2026-09-30', format: 'story', saeule: 3, thema: 'Richtig oder falsch: Sonne', kennung: 'S2', status: 'bereit', hinweis: 'Text fertig', zustaendig: 'Predi' },
  { ...IG, datum: '2026-10-01', format: 'karussell', saeule: 1, thema: 'TAF. I – Zeus', kennung: 'K1', status: 'in_arbeit', hinweis: 'Design offen', zustaendig: 'Betreuung' },
  { ...GOOGLE, datum: '2026-10-01', format: 'einzelbild', saeule: 1, thema: 'Zeus als Foto-Beitrag im Google-Profil', kennung: 'K1', status: 'geplant', hinweis: 'Wiederverwendung', zustaendig: 'Betreuung' },
  { ...STORY, datum: '2026-10-02', format: 'story', saeule: 4, thema: 'Freitagsfrage: Was wolltest du einen Tätowierer schon immer fragen?', kennung: 'S4', status: 'bereit', hinweis: 'Text fertig', zustaendig: 'Predi' },
  { ...IG, datum: '2026-10-04', format: 'einzelbild', saeule: 4, thema: 'STIMMEN #1: Kunst kommt von Können', kennung: 'E2', status: 'in_arbeit', hinweis: 'Design offen', zustaendig: 'Betreuung' },
  { ...IG, datum: '2026-10-06', format: 'karussell', saeule: 3, thema: 'So läuft deine Anfrage (anheften)', kennung: 'K3', status: 'in_arbeit', hinweis: 'Design offen, Predi bestätigt Ablauf', zustaendig: 'Betreuung' },
  { ...STORY, datum: '2026-10-06', format: 'story', saeule: 4, thema: 'Antworten auf die Freitagsfrage, je Frage ein Frame', kennung: '', status: 'geplant', hinweis: '', zustaendig: 'Predi' },
  { ...STORY, datum: '2026-10-07', format: 'story', saeule: 1, thema: 'Aus dem Studio: Stencil auf der Haut', kennung: 'S3', status: 'geplant', hinweis: 'Live aus dem Studio', zustaendig: 'Predi' },
  { ...IG, datum: '2026-10-08', format: 'karussell', saeule: 2, thema: 'COVER-UP-AKTE #1: 5 Fragen vor dem Cover-Up', kennung: 'K2', status: 'in_arbeit', hinweis: 'Predi prüft fachlich', zustaendig: 'Betreuung' },
  { ...STORY, datum: '2026-10-09', format: 'story', saeule: 2, thema: 'Reshare K2 + Umfrage: Tattoo loswerden?', kennung: 'S6', status: 'bereit', hinweis: 'Text fertig', zustaendig: 'Betreuung' },
  { ...IG, datum: '2026-10-11', format: 'reel', saeule: 1, thema: 'Sieben Tafeln (Portfolio-Reel)', kennung: 'R4', status: 'in_arbeit', hinweis: 'Schnitt offen', zustaendig: 'Betreuung' },
  { ...IG, datum: '2026-10-13', format: 'reel', saeule: 3, thema: 'Hygiene in 15 Sekunden', kennung: 'R2', status: 'geplant', hinweis: 'Aufnahme offen', zustaendig: 'Predi' },
  { ...STORY, datum: '2026-10-14', format: 'story', saeule: 2, thema: 'Richtig oder falsch: Jedes Tattoo überdeckbar?', kennung: 'S5', status: 'bereit', hinweis: 'Predi prüft', zustaendig: 'Predi' },
  { ...IG, datum: '2026-10-15', format: 'reel', saeule: 1, thema: 'Dotwork: Mandala Rücken', kennung: 'R3', status: 'in_arbeit', hinweis: 'Schnitt offen', zustaendig: 'Betreuung' },
  { ...GOOGLE, datum: '2026-10-15', format: 'einzelbild', saeule: 1, thema: 'Mandala als Foto-Beitrag im Google-Profil', kennung: 'R3', status: 'geplant', hinweis: 'Wiederverwendung', zustaendig: 'Betreuung' },
  { ...STORY, datum: '2026-10-16', format: 'story', saeule: 1, thema: 'Freitagsfrage: Welche Körperstelle als Nächstes?', kennung: '', status: 'bereit', hinweis: 'Text fertig', zustaendig: 'Predi' },
  { ...IG, datum: '2026-10-18', format: 'einzelbild', saeule: 2, thema: 'Keine Vorlagen von der Stange', kennung: 'E3', status: 'in_arbeit', hinweis: 'Design offen', zustaendig: 'Betreuung' },
  { ...IG, datum: '2026-10-20', format: 'reel', saeule: 1, thema: 'IM ENTSTEHEN #1: Vom Stencil zum Schatten', kennung: 'R1', status: 'geplant', hinweis: 'Wartet auf Clips', zustaendig: 'Predi' },
  { ...STORY, datum: '2026-10-20', format: 'story', saeule: 1, thema: 'Antworten auf die Freitagsfrage', kennung: '', status: 'geplant', hinweis: '', zustaendig: 'Predi' },
  { ...STORY, datum: '2026-10-21', format: 'story', saeule: 3, thema: 'Richtig oder falsch: Farbe vs. Black & Grey', kennung: 'S8', status: 'geplant', hinweis: 'Predis Antwort offen', zustaendig: 'Predi' },
  { ...IG, datum: '2026-10-22', format: 'karussell', saeule: 3, thema: 'FRAG PREDI #2: Die ersten 14 Tage', kennung: 'K4', status: 'geplant', hinweis: 'Wartet auf Pflegeanleitung', zustaendig: 'Betreuung' },
  { ...STORY, datum: '2026-10-23', format: 'story', saeule: 1, thema: 'Frisch vs. verheilt', kennung: 'S7', status: 'geplant', hinweis: 'Material offen', zustaendig: 'Predi' },
  { ...IG, datum: '2026-10-25', format: 'karussell', saeule: 2, thema: 'Von der Idee zur Haut: Portrait & Maske (sonst TAF. II Tiger)', kennung: 'K5', status: 'geplant', hinweis: 'Wartet auf Entwurf + Einwilligung', zustaendig: 'Betreuung' },
  { ...IG, datum: '2026-10-27', format: 'reel', saeule: 2, thema: 'K2 als animiertes Reel', kennung: 'K2', status: 'geplant', hinweis: 'Wiederverwendung', zustaendig: 'Betreuung' },
  { kanal: 'intern', uhrzeit: '', datum: '2026-10-27', format: 'auswertung', saeule: null, thema: 'Monatsauswertung: Kennzahlen, Formatentscheidungen, Plan Woche 5–8', kennung: '', status: 'geplant', hinweis: 'Termin mit Predi setzen', zustaendig: 'Betreuung' },
];

// ─── Hook-Bibliothek ─────────────────────────────────────────────────────────

const hook = (saeule: number, text: string): SocialHookInput => ({ saeule, text, status: 'frei', inhalt_id: '' });

export const TINTENBLUT_START_HOOKS: SocialHookInput[] = [
  hook(1, 'WEICHE ÜBERGÄNGE ENTSTEHEN NICHT ZUFÄLLIG.'),
  hook(1, 'VOM STENCIL ZUM SCHATTEN.'),
  hook(1, 'TAUSENDE PUNKTE. EIN MUSTER.'),
  hook(1, 'SO SIEHT EIN AUGE NACH 3 STUNDEN AUS.'),
  hook(1, 'SCHWARZ IST NICHT GLEICH SCHWARZ.'),
  hook(2, 'DEIN ALTES TATTOO MUSS NICHT BLEIBEN. ABER ES BESTIMMT MIT.'),
  hook(2, 'KEINE VORLAGEN VON DER STANGE.'),
  hook(2, 'EINE IDEE. EIN ENTWURF. EINE HAUT.'),
  hook(2, 'WARUM ICH MANCHMAL „GRÖSSER“ SAGE.'),
  hook(2, 'AUS DIESER REFERENZ WURDE DAS HIER.'),
  hook(3, 'DAS TATTOO IST FERTIG. JETZT BIST DU DRAN.'),
  hook(3, 'BEVOR DIE NADEL DIE HAUT BERÜHRT:'),
  hook(3, 'DU HAST EINE IDEE. SO WIRD EIN TATTOO DARAUS.'),
  hook(3, '3 DINGE, DIE DU VOR EINER LANGEN SITZUNG TUN SOLLTEST.'),
  hook(3, 'WAS EIN TATTOO KOSTET? DAS ERKLÄRE ICH DIR IN DER BERATUNG. HIER IST WARUM.'),
  hook(4, 'EIN STUDIO. EIN KÜNSTLER. ÜBER 20 JAHRE.'),
  hook(4, '„DORT WIRD EINEM BEWUSST, DASS KUNST VON ‚KÖNNEN‘ KOMMT!“'),
  hook(4, '220 KILOMETER FÜR EIN TATTOO.'),
  hook(4, 'MEIN ARBEITSPLATZ, BEVOR DU KOMMST.'),
  hook(4, 'WARUM ICH ALLEIN ARBEITE.'),
];

// ─── Aufgaben ────────────────────────────────────────────────────────────────

const woche1 = (titel: string, beschreibung: string, zustaendig = ''): SocialAufgabeInput => ({ bereich: 'woche1', titel, beschreibung, dringlichkeit: 'sofort', faellig_am: '', zustaendig });
const fehlt = (dringlichkeit: string, faellig_am: string, titel: string, beschreibung: string, zustaendig = ''): SocialAufgabeInput => ({ bereich: 'fehlt', titel, beschreibung, dringlichkeit, faellig_am, zustaendig });
const ritual = (titel: string, beschreibung: string, zustaendig = ''): SocialAufgabeInput => ({ bereich: 'ritual', titel, beschreibung, dringlichkeit: '', faellig_am: '', zustaendig });

export const TINTENBLUT_START_AUFGABEN: SocialAufgabeInput[] = [
  woche1('Instagram prüfen', '@tintenblut_tattoo_ ist Business- oder Creator-Konto, Kategorie „Tätowierer“, verbunden mit Facebook-Seite und Meta Business Suite. Handle @tintenblut_tattoo auf TikTok sichern.', 'Betreuung'),
  woche1('Profilbild', 'Das echte Logo, auf den runden Zuschnitt getestet.', 'Betreuung'),
  woche1('Name-Feld setzen', '„Tintenblut Tattoo | Stuttgart“ – das Name-Feld ist in der Suche auffindbar.', 'Betreuung'),
  woche1('Bio eintragen', 'Wörtlich:\nPredi · 20+ Jahre · Stuttgart-Süd\nRealistik · Blackwork · Custom · Cover-Up\nKeine Vorlagen von der Stange.\n↓ Termin per WhatsApp', 'Betreuung'),
  woche1('Link im Profil', 'WhatsApp-Link mit vorbefülltem Text, damit die Quelle sichtbar ist:\nhttps://wa.me/4915204683330?text=Hi%20Predi%2C%20ich%20komme%20%C3%BCber%20Instagram%20%E2%80%93%20meine%20Idee%3A%20\nVorher testen.', 'Betreuung'),
  woche1('Kontakt-Buttons', 'WhatsApp 01520 4683330, Adresse Böblinger Str. 28, 70178 Stuttgart.', 'Betreuung'),
  woche1('Highlights anlegen', 'Cover: Tinte-Fläche, Label in Space Mono.\nTAFELN (Portfolio) · COVER-UP · ANFRAGE (Ablauf aus K3) · PFLEGE · STIMMEN (Google-Rezensionen) · STUDIO', 'Betreuung'),
  woche1('Vorlagen bauen', 'T (Tinte), K (Knochen), B (Blut), Tafelrahmen, CTA-Slide, Story-Vorlagen, Reel-Endcard. Einmalig ca. 4 Stunden.', 'Betreuung'),
  woche1('Einwilligungsformular Foto/Video', 'Schriftlich, pro Kund:in: Foto ja/nein, Video ja/nein, Gesicht sichtbar ja/nein, Widerruf möglich. Vor dem ersten Kunden-Post rechtlich prüfen lassen.', 'Predi'),
  woche1('Stativ und Licht am Arbeitsplatz', 'Fest einrichten, damit Clips nebenbei entstehen.', 'Predi'),
  woche1('WhatsApp Business einrichten', 'Schnellantworten für MOTIV, COVER und PFLEGE, Label „Instagram“ für Anfragen aus Social.', 'Predi'),
  woche1('Die ersten drei Posts gestalten', 'Di 29.09. E1 (danach anheften) · Do 01.10. K1 · So 04.10. E2. Alle eingeplant, bevor E1 live geht.', 'Betreuung'),
  woche1('Google-Unternehmensprofil', 'Fotos der 7 Galerie-Arbeiten hochladen, Öffnungszeiten prüfen.', 'Betreuung'),

  fehlt('sofort', '2026-09-29', 'Zugang Instagram / Meta Business Suite', 'Für die Betreuung klären.', 'Predi'),
  fehlt('sofort', '2026-09-29', 'Rollen bestätigen', 'Wer macht was? Siehe Strategie → Aufgabenteilung.'),
  fehlt('diese_woche', '2026-10-01', 'Einwilligungsformular fertig', 'Unterschrieben verfügbar, bevor Kund:innen gefilmt werden.'),
  fehlt('diese_woche', '2026-10-01', 'Zielwert festlegen', 'Wie viele qualifizierte Anfragen aus Instagram bis 27.12.2026?'),
  fehlt('vor_0810', '2026-10-08', 'Cover-Up-Aussagen prüfen', 'Predi prüft K2 und S5 fachlich.', 'Predi'),
  fehlt('vor_2010', '2026-10-12', 'Hygiene-Routine filmen', 'Für R2, ca. 10 Minuten vor einer Sitzung.', 'Predi'),
  fehlt('vor_2010', '2026-10-19', 'Clips einer großen Sitzung', 'Für R1, mit Einwilligung, Gesicht nicht im Bild.', 'Predi'),
  fehlt('vor_2010', '2026-10-20', 'Entwurf + Einwilligung für K5', 'Sonst erscheint TAF. II (Tiger & Totenkopf).', 'Predi'),
  fehlt('vor_2010', '2026-10-20', 'Pflegeanleitung als Text', 'Für K4 und das PDF zum Stichwort PFLEGE.', 'Predi'),
  fehlt('spaeter', '', 'Frisch-vs.-verheilt-Fotos sammeln', 'Für S7, bei jedem Nachstechtermin.', 'Predi'),
  fehlt('spaeter', '', 'Website-Statistik', 'Welches Tool misst UTM-Besuche? Datenschutzkonform (Consent).'),
  fehlt('spaeter', '', 'TikTok bewerten', 'Nach 90 Tagen: Prozess-Reels 1:1 nutzbar?'),

  ritual('Dienstag vor Öffnung, 20 Min.', 'Material der Woche sichten, Posts festlegen, Freitagsfrage beantworten.'),
  ritual('Dienstag, 15 Min.', 'Kennzahlen eintragen: Reichweite, Speicherungen, Geteilt, Profilaufrufe, Link-Klicks, DMs je Stichwort, WhatsApp-Anfragen mit Quelle Instagram.', 'Betreuung'),
  ritual('Mittwoch bis Freitag', 'Produktion für die nächste Woche, eine Woche Vorlauf. Posts in der Meta Business Suite vorplanen.', 'Betreuung'),
  ritual('Während jeder größeren Sitzung', '3 Clips (Stencil, Linien, Schattierung) + Endfoto, 3 Minuten. Nur mit Einwilligung.', 'Predi'),
  ritual('Täglich, ca. 10 Min.', 'DMs und Kommentare beantworten, mit „– Predi“.', 'Predi'),
  ritual('Monatlich', 'Monatsauswertung: neue Follower aus der Region, Anfragen und Termine mit Quelle Instagram, Plan für die nächsten 4 Wochen.', 'Betreuung'),
];

// ─── Strategie ───────────────────────────────────────────────────────────────

export const TINTENBLUT_START_TEXTE: SocialTextInput[] = [
  {
    schluessel: 'fundament',
    titel: 'Fundament',
    text:
      'Zeitraum: 29.09.2026 bis 27.12.2026 · Kapazität: 3 Posts + 4 Stories pro Woche, ca. 3–4 Std./Woche insgesamt.\n\n' +
      'REGEL\nNur echte Fakten: Predi, 20+ Jahre, 4,8/5 bei Google, die echten Google-Rezensionen, die sieben echten Arbeiten aus der Galerie, Adresse, Öffnungszeiten, WhatsApp. Keine Preise, keine erfundenen Kund:innen oder Arbeiten.\n\n' +
      'ZIEL\nQualifizierte Tattoo-Anfragen per WhatsApp und Kontaktformular aus Instagram. Qualifiziert heißt: konkrete Motividee (oder Cover-Up) in einer der vier Disziplinen, Bereitschaft zur Beratung, realistischer Zeitraum in den nächsten drei Monaten.\n\n' +
      'ZIELGRUPPE\nDie Suchenden: Menschen in und um Stuttgart (und weiter, siehe die 220-km-Rezension), die ein detailreiches, individuelles Stück wollen, vor allem Realistik oder Blackwork. Sie vergleichen Portfolios und Bewertungen, bevor sie schreiben.\n' +
      'Die Cover-Up-Fälle: Menschen mit einem alten oder ungewollten Tattoo. Sie haben weniger Angst vor der Nadel als davor, dass es wieder schiefgeht.\n\n' +
      'Beide misstrauen Studios, die mit Flash-Katalog und Rabattaktionen werben. Also werben wir nicht. Wir zeigen Arbeit.\n\n' +
      'WAS TINTENBLUT AUF SOCIAL ANDERS MACHT\n' +
      '1. Zeigen statt behaupten. Jeder Post zeigt ein echtes Stück Arbeit. Kein Post ohne Tattoo oder Handwerk im Bild.\n' +
      '2. Kunst kommt von Können. Nahaufnahmen, Details, Übergänge – die Qualität sieht man.\n' +
      '3. Ein Künstler, eine Stimme. DMs und Kommentare beantwortet Predi selbst oder sie werden mit „– Predi“ unterschrieben.\n' +
      '4. Social ist die Galerie vor der Galerie. Wer das Profil öffnet, sieht in 30 Sekunden: Realistik, Blackwork, Cover-Up, 20 Jahre, 4,8 Sterne, WhatsApp.\n\n' +
      'WAS ERFOLG NACH 90 TAGEN HEISST\n' +
      '· Die Messkette steht: Jede WhatsApp-Anfrage hat eine Quelle.\n' +
      '· Zielwert qualifizierte Anfragen aus Instagram bis 27.12.2026: [ERGÄNZEN]\n' +
      '· Rund 38 Posts sind veröffentlicht, das Profil funktioniert als Portfolio.\n' +
      '· Wir wissen, welche Säule und welches Format Anfragen auslöst, und richten Q1 2027 danach aus.',
  },
  {
    schluessel: 'kanaele',
    titel: 'Kanalentscheidung',
    text:
      'Instagram @tintenblut_tattoo_ – Hauptkanal. Portfolio, Reels vom Prozess, Stories aus dem Studio, Einstieg per DM/WhatsApp. 3 Posts + 4 Stories/Woche. MACHEN.\n' +
      'Google-Unternehmensprofil – lokale Suche „Tattoo Stuttgart“. Jede fertige Arbeit zusätzlich als Foto-Beitrag. 10 Min./Woche, keine Neuproduktion. MACHEN.\n' +
      'Facebook /tintenbluttattoo – automatisch aus der Meta Business Suite mitposten. MINIMAL.\n' +
      'TikTok – Handle sichern. Nach 90 Tagen prüfen, die Prozess-Reels lassen sich 1:1 nutzen. SPÄTER.\n' +
      'Pinterest / LinkedIn – passen nicht zur Zielgruppe. NEIN.\n\n' +
      'WARUM GOOGLE DAZUGEHÖRT\nDie meisten Tattoo-Suchen sind lokal („Tattoo Studio Stuttgart Süd“, „Cover Up Stuttgart“). 4,8 Sterne sind das stärkste Argument, und neue Fotos halten das Profil aktiv. Kostet nichts, die Bilder sind schon da.\n\n' +
      'WAS WIR NICHT MACHEN\n' +
      '· Keine Rabattaktionen, „Flash Days“ mit Kampfpreisen, Gewinnspiele oder gekauften Follower.\n' +
      '· Keine Preise in Posts oder Kommentaren. Preisfragen gehen in die Beratung per WhatsApp.\n' +
      '· Keine Trend-Audios, Memes oder Tanz-Formate.\n' +
      '· Keine Fotos oder Videos von Kund:innen ohne schriftliche Einwilligung. Keine Gesichter ohne ausdrückliches Okay.\n' +
      '· Keine KI-generierten Tattoos oder Motive.\n' +
      '· Keine medizinischen Heilversprechen. Bei Problemen gilt immer: Arzt.\n' +
      '· Kein tägliches Posten. Drei starke Arbeiten schlagen sieben schwache Handyfotos.',
  },
  {
    schluessel: 'saeulen',
    titel: 'Die vier Content-Säulen',
    text:
      '1 · HANDWERK (Realistik & Blackwork im Entstehen) – 35 %. Zeigen, wie ein Stück entsteht. Beweis: Prozess-Clips (Stencil → Linework → Schattierung → fertig), Detail-Nahaufnahmen.\nThemen: Weiche Übergänge im Black & Grey · Wie ein Auge realistisch wird · Dotwork Punkt für Punkt · Großflächige Rückenstücke · Warum Kontrast über Jahre entscheidet.\n\n' +
      '2 · VON DER IDEE ZUR HAUT (Custom Designs & Cover-Ups) – 25 %. Zeigen, was „keine Vorlagen von der Stange“ konkret heißt. Beweis: Idee/Skizze vs. Ergebnis, Cover-Up vorher/nachher.\nThemen: Aus einer Referenz wird ein eigener Entwurf · Was bei einem Cover-Up geht und was nicht · Motive, die über Körperstellen fließen · Warum Predi manchmal Nein oder „größer“ sagt.\n\n' +
      '3 · WISSEN & VERTRAUEN (Beratung, Hygiene, Pflege) – 20 %. Unsicherheit vor dem ersten oder nächsten großen Stück nehmen. Beweis: Studioalltag und klare, allgemeine Infos.\nThemen: So läuft eine Anfrage · Hygiene-Routine · Die ersten 14 Tage · Mythen (Sonne, Schwimmen, Farbe) · Vorbereitung auf eine lange Sitzung.\n\n' +
      '4 · PREDI & STIMMEN (Künstler, Studio, Bewertungen) – 20 %. Den Menschen hinter der Arbeit zeigen, und was Kund:innen sagen. Beweis: echte Google-Rezensionen, 20 Jahre, das Studio im Art Quartal Tattoo.\nThemen: Wer Predi ist · Der Arbeitsplatz · Echte Rezensionen · „Von weit angereist“ · Fragen an Predi.',
  },
  {
    schluessel: 'formate',
    titel: 'Formate und Vorlagen',
    text:
      'FORMATE\n' +
      'Karussell – 1080 × 1350 px (4:5), 5–9 Slides. Slide 1 Hook oder Gesamtbild, dann Details, letzte Slide CTA. ca. 35 %.\n' +
      'Reel – 1080 × 1920 px, Text mittig (oben 250 px, unten 380 px frei), 10–30 Sek. 0–2 Sek. Hook, 3–4 Beats, Endcard 2 Sek. ca. 40 % – Tattoo-Prozess trägt als Video am stärksten.\n' +
      'Einzelbild – 1080 × 1350 px, eine Aussage oder ein fertiges Stück. ca. 25 %.\n' +
      'Story – 1080 × 1920 px, 1–3 Frames, live aus dem Studio plus Interaktion. 4 pro Woche.\n\n' +
      'VORLAGEN IM KUPFERSTICH-STIL DER WEBSITE\n' +
      'Vorlage T (Tinte): Fläche #0d0c0a, Rand 80 px. Überschrift Bodoni Moda Bold, aufrecht, Knochen #f2ecdf, 64–88 pt. Fließtext Newsreader #c7bfa9, 34–40 pt. Label Space Mono, Großbuchstaben, Blutrot #dd5232.\n' +
      'Vorlage K (Knochen): Fläche #f2ecdf, Schrift Tinte #0d0c0a, Akzent #8a1f1f. Für Wissens-Slides und Zitate.\n' +
      'Vorlage B (Blut): Fläche #8a1f1f, Schrift Knochen. Nur für Hooks und CTA-Slides, sparsam.\n' +
      'Tafelrahmen: Jedes Tattoo-Foto in doppeltem Haarlinien-Rahmen wie auf der Website, darunter die Legende in Space Mono: „TAF. I — Realistik, Zeus“.\n' +
      'Fußzeile jeder Feed-Slide: links „TINTENBLUT · STUTTGART“ Space Mono 18 pt, rechts Seitenzahl „03/07“, 60 px vom unteren Rand.\n' +
      'Standard-CTA-Slide (Vorlage B): „DEIN MOTIV. PREDIS HANDSCHRIFT.“ Darunter: „Beratung per WhatsApp – Link im Profil. Di–Fr, 13–19 Uhr, Stuttgart-Süd.“\n\n' +
      'WIEDERKEHRENDE SERIEN\n' +
      'TAFEL – Säule 1, Karussell oder Einzelbild, wöchentlich. Fertige Arbeit mit Detail-Slides, „TAF. n“ fortlaufend wie auf der Website.\n' +
      'IM ENTSTEHEN – Säule 1, Reel, alle 2 Wochen. Prozess-Zeitraffer einer Sitzung.\n' +
      'COVER-UP-AKTE – Säule 2, Karussell oder Reel, monatlich. Vorher → Entwurf → Nachher.\n' +
      'FRAG PREDI – Säule 3, Karussell oder Story, alle 2 Wochen. Echte Fragen aus DMs und Beratungen.\n' +
      'STIMMEN – Säule 4, Einzelbild, monatlich. Eine echte Google-Rezension, wörtlich.',
  },
  {
    schluessel: 'stories',
    titel: 'Story-Formate',
    text:
      'AUS DEM STUDIO – dienstags/donnerstags, live. Stencil auf der Haut, vorbereiteter Arbeitsplatz, ein Detail aus der Sitzung (nur mit Einwilligung). Umfrage- oder Emoji-Slider.\n\n' +
      'RICHTIG ODER FALSCH – mittwochs. Frame 1: Aussage auf Vorlage B. Frame 2: Auflösung in 2 Sätzen auf Vorlage K, „– Predi“. Quiz-Sticker.\n\n' +
      'FREITAGSFRAGE – freitags, Antworten dienstags. Fragesticker, je Antwort ein Frame.\n\n' +
      'Sonntags: Reshare des aktuellen Posts mit Umfrage. Jede Story mit Linkziel bekommt den Link-Sticker.',
  },
  {
    schluessel: 'wiederverwendung',
    titel: 'Wiederverwendung statt Neuproduktion',
    text:
      'DER WEG IN DREI SCHRITTEN\n' +
      '1. Festhalten, während es passiert. Handy aufs Stativ, bei jeder größeren Sitzung 3 Clips (Stencil, Linework, Schattierung, je 10–20 Sek.) und das fertige Stück bei gutem Licht. Nur mit unterschriebener Einwilligung.\n' +
      '2. Sichten und einsortieren (Dienstag vor Öffnung, 20 Min.): Säule und Format festlegen, Gesichter und Namen entfernen.\n' +
      '3. In die Vorlage gießen: Tafelrahmen, Hook aus der Bibliothek, Standard-CTA.\n\n' +
      'QUELLE → POST\n' +
      'Die 7 Galerie-Arbeiten der Website → TAFEL-Posts und Portfolio-Reel (sofort verfügbar).\n' +
      'Jede neue große Sitzung → IM-ENTSTEHEN-Reel + TAFEL-Post + Google-Foto.\n' +
      'Nachstechtermin → Story „Frisch vs. verheilt“.\n' +
      'Cover-Up-Beratung → COVER-UP-AKTE (nur mit Einwilligung).\n' +
      'Fragen aus WhatsApp → FRAG PREDI.\n' +
      'Google-Rezensionen → STIMMEN.\n' +
      'Ein Karussell → Reel (Slides animiert) · 3 Story-Frames · Google-Beitrag · Facebook.',
  },
  {
    schluessel: 'messung',
    titel: 'Messung: Kennzahlen und Schwellen',
    text:
      'WÖCHENTLICH (Dienstag, 15 Min.)\n' +
      '· Reichweite je Post, Speicherungen, Geteilt, Profilaufrufe, Link-Klicks (Instagram Insights).\n' +
      '· DMs mit Stichwort (MOTIV, COVER, PFLEGE) – frühestes Anfrage-Signal. Hier unter „Messung“ erfassen.\n' +
      '· Story-Antworten und Umfrage-Teilnahmen.\n\n' +
      'MONATLICH\n' +
      '· Neue Follower, davon aus Stuttgart und Umgebung (Insights → Zielgruppe → Orte).\n' +
      '· Website-Sitzungen mit utm_source=instagram.\n' +
      '· WhatsApp-Anfragen mit Quelle Instagram, daraus entstandene Termine.\n\n' +
      'SCHWELLEN ZUM AUSSORTIEREN ODER VERDOPPELN\n' +
      'Vergleichsgröße ist der eigene Median, kein Branchenwert. Ab dem 9. Post: Median von (Speicherungen + Geteilt) ÷ Reichweite über die letzten 8 Posts. Das Werkzeug rechnet das aus.\n' +
      '· Aussortieren: dreimal hintereinander unter dem Median UND keine Anfrage ausgelöst.\n' +
      '· Verdoppeln: zweimal hintereinander beim 1,5-Fachen des Medians ODER mindestens eine echte Terminanfrage.\n' +
      '· Eine echte Anfrage zählt mehr als jede Reichweite.\n\n' +
      'QUELLE JEDER ANFRAGE\n' +
      'WhatsApp-Link im Profil mit vorbefülltem Text „ich komme über Instagram“. Bei jeder Beratung fragen: „Wie bist du auf mich gekommen?“',
  },
  {
    schluessel: 'rollen',
    titel: 'Aufgabenteilung',
    text:
      'Annahme, bitte bestätigen: Predi tätowiert und liefert Material, die Betreuung gestaltet, plant und wertet aus.\n\n' +
      'PREDI – Clips während der Sitzung, Fotos der fertigen Stücke, Einwilligungen einholen, fachliche Freigabe aller Wissens- und Pflege-Posts, DMs zu Motiven und Cover-Ups. ca. 1,5 Std./Woche.\n' +
      'BETREUUNG – Redaktionsplan, Captions, Gestaltung in den Vorlagen, Reel-Schnitt, Einplanung in der Meta Business Suite, Google-Beiträge, Zahlen, Monatsauswertung. ca. 2–2,5 Std./Woche.\n\n' +
      'EINMALIG IN WOCHE 1\nVorlagen T/K/B, Tafelrahmen, Story-Vorlagen, Highlight-Cover, Reel-Endcard (ca. 4 Std.). Einwilligungsformular. Stativ und Licht am Arbeitsplatz.',
  },
  {
    schluessel: 'erwartung',
    titel: 'Was nach 30 Tagen zu erwarten ist',
    text:
      'Nach 30 Tagen gibt es 13 Posts, ein Profil, das wie die Website als Portfolio funktioniert, und eine Messkette, die jede WhatsApp-Anfrage einer Quelle zuordnet.\n\n' +
      'Ohne Werbebudget erreicht ein Account in dieser Zeit vor allem bestehende Follower, deren Freund:innen und lokale Suchende. Die ersten Anfragen kommen deshalb eher aus Google + Profil als aus Instagram allein.\n\n' +
      'Ob Instagram eigenständig Anfragen bringt, zeigt sich realistisch im zweiten und dritten Monat, vor allem über Reels.',
  },
];
