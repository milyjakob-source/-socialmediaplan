// Auszug aus der Karte. Gerichte stammen aus öffentlichen Quellen (alte Website, Presse,
// Speisekarten-Portale) und sind vor dem Livegang mit dem Restaurant abzugleichen. PRÜFEN
// Preise werden bewusst nicht gezeigt; die aktuelle Karte mit Preisen gibt es im Restaurant.
// tags: 'veg' (vegetarisch), 'gf' (glutenfrei auf Anfrage), 'haus' (Empfehlung des Hauses)

export const KARTE_PDF = ''; // z. B. '../assets/speisekarte.pdf', dann erscheint ein Download-Knopf

export const KARTE = [
  {
    id: 'antipasti',
    titel: 'Antipasti',
    intro: 'Zum Teilen oder als Auftakt.',
    gerichte: [
      { name: 'Bruschetta Classica', text: 'Geröstetes Brot mit Tomaten, Knoblauch, Basilikum und Olivenöl', tags: ['veg'] },
      { name: 'Antipasto misto', text: 'Auswahl italienischer Vorspeisen, wechselnd nach Saison', tags: ['haus'] },
    ],
  },
  {
    id: 'pasta',
    titel: 'Pasta & Risotto',
    intro: 'Unsere Pasta wird im Haus gemacht. Glutenfreie Nudeln auf Anfrage.',
    gerichte: [
      { name: 'Ravioli al Tartufo', text: 'Ravioli mit Ricotta und Trüffel in Salbeibutter', tags: ['veg', 'haus'] },
      { name: 'Tagliatelle Mari e Monti', text: 'Tagliatelle mit Pilzen und Garnelen in Cognac-Sahnesauce' },
      { name: 'Spaghetti Aglio e Olio', text: 'Knoblauch, Olivenöl, Peperoncino und Petersilie', tags: ['veg', 'gf'] },
      { name: 'Spaghetti al Pomodoro', text: 'Tomatensauce und frisches Basilikum', tags: ['veg', 'gf'] },
      { name: 'Risotto del giorno', text: 'Risotto nach Tagesangebot, fragen Sie unseren Service', tags: ['gf'] },
    ],
  },
  {
    id: 'pizza',
    titel: 'Pizza',
    intro: 'Die Klassiker aus dem Ofen.',
    gerichte: [
      { name: 'Pizza Margherita', text: 'Tomatensauce, Mozzarella und frisches Basilikum', tags: ['veg'] },
      { name: 'Pizza Quattro Stagioni', text: 'Tomatensauce, Mozzarella, Champignons, Artischocken, Schinken und Oliven' },
    ],
  },
  {
    id: 'pesce',
    titel: 'Pesce',
    intro: 'Fisch nach Marktlage.',
    gerichte: [
      { name: 'Branzino al forno', text: 'Wolfsbarsch aus dem Ofen mit gemischtem Salat', tags: ['gf', 'haus'] },
    ],
  },
  {
    id: 'carne',
    titel: 'Carne',
    intro: 'Kalb und Rind, klassisch zubereitet.',
    gerichte: [
      { name: 'Saltimbocca alla Romana', text: 'Kalbsschnitzel mit Parmaschinken und Salbei in Weißweinsauce' },
      { name: 'Scaloppina al Limone', text: 'Kalbsschnitzel in Zitronensauce' },
      { name: 'Filetto di Manzo alla griglia', text: 'Gegrilltes Rinderfilet', tags: ['gf'] },
    ],
  },
  {
    id: 'dolci',
    titel: 'Dolci',
    intro: 'Zum Schluss etwas Süßes.',
    gerichte: [
      { name: 'Tiramisù della casa', text: 'Hausgemacht, mit einer Prise Kakao', tags: ['veg', 'haus'] },
      { name: 'Panna Cotta alla fragola', text: 'Mit frischen Erdbeeren', tags: ['veg', 'gf'] },
    ],
  },
];
