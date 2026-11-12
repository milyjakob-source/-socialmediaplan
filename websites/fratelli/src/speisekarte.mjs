// Speisekarte der Osteria Fratelli.
//
// PRÜFEN: Eine aktuelle Karte war online nicht zu finden. Gerichte und Preise sind ein Vorschlag im Rahmen
// von 10–20 € pro Person (Google-Profil) und müssen vor dem Livegang durch die echte Karte ersetzt werden.
// Sicher belegt sind: italienisches Frühstück (Caffè latte, Cornetto, Biscotti, Succo di frutta, Tafel 7,90 €),
// hausgemachte Pasta, Pinsa, kleine Antipasti, „Pasta alla Rosario“ (Google-Profil), Weine und Olivenöl.
//
// Aufbau: Gruppen → Kategorien → Einträge.
// Eintrag: { name, text, preis }
//   preis: Text ('6,90', 'Glas 5,90') oder Liste von Varianten [['klein', '7,50'], ['groß', '9,90']]
// Kategorie: { id, titel, untertitel, intro, hinweis, art: 'karten' | 'liste', spezial, eintraege }
//   art 'karten' = Kacheln, 'liste' = kompakte Zeilen (Getränke)

export const KARTE_PDF = ''; // z. B. '../assets/speisekarte.pdf', dann erscheint ein Download-Knopf

const K = (name, text, preis) => ({ name, text, preis });

export const GRUPPEN = [
  {
    id: 'colazione',
    titel: 'Colazione',
    kategorien: [
      {
        id: 'fruehstueck',
        titel: 'Colazione',
        untertitel: 'Frühstück, Mo–Fr ab 9:30, Sa ab 10:00',
        intro: 'Wie in einer Bar in Italien: ein guter Caffè, etwas Süßes, und der Tag kann beginnen.',
        spezial: true,
        eintraege: [
          K('Colazione italiana', 'Caffè latte, Cornetto, Biscotti und ein Glas Succo di frutta', '7,90'),
          K('Cornetto', 'Mit Crema, Marmellata oder Pistazie', '2,50'),
          K('Cornetto salato', 'Mit Prosciutto cotto und Käse, warm', '4,90'),
          K('Toast Fratelli', 'Prosciutto cotto, Mozzarella, Tomate, dazu ein kleiner Salat', '6,90'),
          K('Colazione dolce', 'Cappuccino, zwei Biscotti und ein Stück Torta della casa', '8,50'),
          K('Uova strapazzate', 'Rührei mit Parmigiano, Kirschtomaten und geröstetem Brot', '7,50'),
        ],
      },
    ],
  },
  {
    id: 'speisen',
    titel: 'Pranzo & Cena',
    kategorien: [
      {
        id: 'antipasti',
        titel: 'Antipasti',
        untertitel: 'Vorspeisen',
        eintraege: [
          K('Bruschetta', 'Geröstetes Brot mit Tomaten, Knoblauch, Basilikum und unserem sizilianischen Olivenöl', '6,90'),
          K('Antipasti misti', 'Kleine Variation von der Theke: Salumi, Formaggi, Gemüse und Oliven', [['für 1', '11,90'], ['für 2', '19,90']]),
          K('Vitello tonnato', 'Kalbfleisch, hauchdünn, mit Thunfischcreme und Kapern', '12,90'),
          K('Burrata', 'Mit Kirschtomaten, Rucola und Basilikumöl', '11,50'),
          K('Carpaccio di manzo', 'Rind, dünn geschnitten, mit Rucola und Parmigiano', '12,50'),
        ],
      },
      {
        id: 'insalate',
        titel: 'Insalate',
        untertitel: 'Salate',
        eintraege: [
          K('Insalata mista', 'Gemischter Salat der Saison', '6,50'),
          K('Insalata Caprese', 'Mozzarella, Tomate, Basilikum, Olivenöl', '9,50'),
          K('Insalata Fratelli', 'Blattsalate, Bresaola, Parmigiano, Kirschtomaten, Balsamico', '12,90'),
        ],
      },
      {
        id: 'pasta',
        titel: 'Pasta fatta in casa',
        untertitel: 'Hausgemachte Pasta',
        intro: 'Unsere Pasta machen wir selbst. Welche Sorten es heute gibt, steht zusätzlich auf der Tageskarte.',
        hinweis: 'Auf Wunsch auch als kleine Portion.',
        eintraege: [
          K('Pasta alla Rosario', 'Unsere Spezialität des Hauses. Fragen Sie uns, wie wir sie heute zubereiten', '13,90'),
          K('Tagliatelle al ragù', 'Mit langsam geschmortem Ragù vom Rind', '13,50'),
          K('Spaghetti alla carbonara', 'Guanciale, Eigelb, Pecorino, schwarzer Pfeffer', '12,90'),
          K('Pasta alla Norma', 'Aubergine, Tomate, Basilikum und Ricotta salata, wie in Sizilien', '12,50'),
          K('Ravioli burro e salvia', 'Gefüllt mit Ricotta und Spinat, in Salbeibutter', '13,90'),
          K('Pasta al pesto di pistacchio', 'Mit Pistazienpesto und Stracciatella', '14,50'),
          K('Penne all’arrabbiata', 'Tomate, Knoblauch, Peperoncino', '10,50'),
        ],
      },
      {
        id: 'pinsa',
        titel: 'Pinsa Romana',
        untertitel: 'Luftig, knusprig, leicht',
        intro: 'Der Teig ruht lange und wird dadurch besonders bekömmlich. Pinsa gibt es auch zum Mitnehmen und Fertigbacken zu Hause.',
        eintraege: [
          K('Pinsa Margherita', 'Tomate, Fior di latte, Basilikum', '10,50'),
          K('Pinsa Burrata', 'Kirschtomaten, Burrata, Basilikum, Olivenöl', '14,90'),
          K('Pinsa Parma', 'Fior di latte, Prosciutto crudo, Rucola, Parmigiano', '14,50'),
          K('Pinsa Mortadella', 'Fior di latte, Mortadella, Pistazie, Stracciatella', '14,90'),
          K('Pinsa Diavola', 'Tomate, Fior di latte, scharfe Salami', '12,90'),
          K('Pinsa Ortolana', 'Gemüse der Saison, Fior di latte, Basilikum', '12,50'),
        ],
      },
      {
        id: 'dolci',
        titel: 'Dolci',
        untertitel: 'Desserts',
        eintraege: [
          K('Tiramisù della casa', 'Nach Familienrezept', '6,50'),
          K('Cannolo siciliano', 'Mit Ricotta, Pistazie und Orangenschale', '4,90'),
          K('Panna cotta', 'Mit Beerensauce', '5,90'),
          K('Affogato', 'Vanilleeis mit einem Espresso übergossen', '4,90'),
        ],
      },
    ],
  },
  {
    id: 'getraenke',
    titel: 'Bevande',
    kategorien: [
      {
        id: 'caffe',
        titel: 'Caffè',
        untertitel: 'Kaffee',
        art: 'liste',
        eintraege: [
          K('Espresso', '', '2,20'),
          K('Espresso doppio', '', '3,40'),
          K('Espresso macchiato', '', '2,50'),
          K('Cappuccino', '', '3,40'),
          K('Caffè latte', '', '3,90'),
          K('Latte macchiato', '', '3,90'),
          K('Tè', 'Verschiedene Sorten', '3,00'),
          K('Cioccolata calda', 'Heiße Schokolade', '3,90'),
        ],
      },
      {
        id: 'analcolici',
        titel: 'Analcolici',
        untertitel: 'Alkoholfrei',
        art: 'liste',
        eintraege: [
          K('Acqua minerale', 'Still oder sprudelnd', [['0,25 l', '2,90'], ['0,75 l', '6,50']]),
          K('Succo di frutta', 'Orange, Pfirsich oder Aprikose', '3,50'),
          K('Spremuta d’arancia', 'Frisch gepresster Orangensaft', '4,50'),
          K('Limonata, Aranciata', 'San Pellegrino', '3,50'),
          K('Chinotto', 'Italienische Bitterorangen-Limonade', '3,50'),
        ],
      },
      {
        id: 'aperitivi',
        titel: 'Aperitivi & Birra',
        untertitel: 'Aperitif und Bier',
        art: 'liste',
        eintraege: [
          K('Aperol Spritz', '', '7,50'),
          K('Hugo', '', '7,50'),
          K('Campari Soda', '', '5,90'),
          K('Prosecco', '', 'Glas 5,50'),
          K('Birra Moretti', '0,33 l', '4,20'),
          K('Peroni Nastro Azzurro', '0,33 l', '4,20'),
          K('Limoncello, Amaro, Grappa', '2 cl', '3,90'),
        ],
      },
      {
        id: 'vini',
        titel: 'Vini',
        untertitel: 'Weine aus Italien',
        intro: 'Eine kleine, sorgfältig gewählte Auswahl. Alle Flaschen gibt es auch zum Mitnehmen.',
        art: 'liste',
        eintraege: [
          K('Vino bianco della casa', 'Weißwein, Sizilien', [['0,2 l', '5,90'], ['Flasche', '24,00']]),
          K('Vino rosso della casa', 'Rotwein, Sizilien', [['0,2 l', '5,90'], ['Flasche', '24,00']]),
          K('Grillo', 'Sizilien, frisch und fruchtig', [['0,2 l', '6,90'], ['Flasche', '28,00']]),
          K('Lugana', 'Lombardei, mineralisch', [['0,2 l', '7,50'], ['Flasche', '30,00']]),
          K('Nero d’Avola', 'Sizilien, kräftig und weich', [['0,2 l', '6,90'], ['Flasche', '28,00']]),
          K('Primitivo', 'Apulien, dunkle Frucht', [['0,2 l', '7,50'], ['Flasche', '30,00']]),
          K('Chianti Classico', 'Toskana', [['Flasche', '34,00']]),
        ],
      },
    ],
  },
];
