import { icon, foto, restaurantJsonLd } from '../../tools/build.mjs';
import { SITE, ZEITEN, zeitText, tel } from '../site.mjs';
import { besuch, social, mitnehmen, schachbrett } from '../teile.mjs';

const GERICHTE = [
  'Colazione italiana',
  'Pasta alla Rosario',
  'Pinsa Burrata',
  'Tagliatelle al ragù',
  'Antipasti misti',
  'Pasta alla Norma',
  'Cannolo siciliano',
  'Cappuccino',
];

// Was Gäste in ihren Bewertungen hervorheben (zusammengefasst, keine Zitate). Echte Rezensionen ersetzen
// diese Karten automatisch, sobald das Apps Script mit Places-API-Schlüssel läuft.
const LOB = [
  ['Hausgemachte Pasta', 'Frisch zubereitet und zu moderaten Preisen: die Pasta ist das, was Gäste am häufigsten loben.', 'cooking-pot'],
  ['Wie im Urlaub', 'Italienisches Radio, Kerzenlicht und ein Gastgeber, der jeden begrüßt: eine kleine Wohlfühloase.', 'sun'],
  ['Caffè wie in Italien', 'Sehr guter Espresso und Cappuccino, dazu ein Cornetto: so beginnt in Degerloch der Tag.', 'coffee'],
];

function sterne(n) {
  const voll = icon('star-fill');
  const leer = voll.replace('class="icon"', 'class="icon is-empty"');
  return Array.from({ length: 5 }, (_, i) => (i < Math.round(n) ? voll : leer)).join('');
}

const wert = SITE.googleBewertung.toFixed(1).replace('.', ',');

export default {
  id: 'start',
  slug: '',
  priority: 1,
  title: 'Start',
  description:
    'Osteria Fratelli in Stuttgart-Degerloch: italienisches Frühstück, hausgemachte Pasta, Pinsa und Antipasti. Familiär geführt von Fabio Meli, Epplestraße 10.',
  jsonld: restaurantJsonLd(),
  body: (ctx) => `
<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <span class="eyebrow">Osteria · Degerloch</span>
      <h1>Vero gusto italiano, <em>mitten in Degerloch</em></h1>
      <p class="lead" data-text="start_text">Morgens Cappuccino und Cornetto, mittags und abends hausgemachte Pasta, Pinsa und kleine Antipasti. Persönlich geführt von Fabio Meli und seinem Bruder Flavio.</p>
      <div class="hero-actions">
        <a class="btn btn-accent btn-lg" href="tel:${tel()}" data-track="anruf">${icon('phone')}Tisch reservieren</a>
        <a class="btn btn-ghost btn-lg" href="${ctx.root}speisekarte/">Speisekarte${icon('arrow-right', 'icon icon-move')}</a>
      </div>
    </div>
    <div class="hero-media">
      ${foto(ctx, 'gastraum-abend', 'Gastraum der Osteria Fratelli am Abend: Kerzen auf weiß gedeckten Tischen, olivgrüne Wände, Schachbrettboden', { eager: true, ratio: 'portrait', sizes: '(min-width: 1024px) 48vw, 100vw' })}
      ${foto(ctx, 'detail-leuchte', 'Leuchte mit goldenem Schein über dem Weinregal', { cls: 'media-small', ratio: 'square', sizes: '240px' })}
    </div>
  </div>
</section>

<section class="wrap" aria-label="Auf einen Blick">
  <div class="facts reveal-stagger">
    <div class="fact">${icon('clock')}<div><strong class="status" data-open-status>Mo-Fr ab 9:30 Uhr</strong><span class="muted">Sa bis 14 Uhr, So Ruhetag</span></div></div>
    <div class="fact">${icon('map-pin')}<div><strong><a href="${SITE.mapsLink}" rel="noopener" target="_blank">${SITE.strasse}</a></strong><span class="muted">${SITE.eingang}, Degerloch</span></div></div>
    <div class="fact">${icon('phone')}<div><strong><a href="tel:${tel()}" data-track="anruf">${SITE.telefonAnzeige}</a></strong><span class="muted">Tisch reservieren und vorbestellen</span></div></div>
  </div>
</section>

<section class="section" id="kueche">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">La cucina</span>
      <h2>Vom Cornetto bis zur Pinsa</h2>
    </div>
    <div class="bento reveal-stagger">
      <a class="tile tile-a" href="${ctx.root}speisekarte/#pasta">
        ${foto(ctx, 'gastraum-tag', 'Lange gedeckte Tafel im hellen Gastraum mit olivgrünen Wänden und Weinregalen', { sizes: '(min-width: 768px) 58vw, 100vw' })}
        <div class="tile-body"><h3>Pasta fatta in casa</h3><p>Unsere Pasta machen wir selbst, die Gerichte wechseln. Probieren Sie die Pasta alla Rosario, unsere Spezialität des Hauses.</p></div>
      </a>
      <a class="tile tile-b tile-plain tile-accent" href="${ctx.root}speisekarte/#fruehstueck">
        ${icon('coffee', 'icon tile-icon')}
        <div class="tile-body"><h3>Colazione</h3><p>Italienisches Frühstück ab 9:30 Uhr: Caffè latte, Cornetto, Biscotti und Succo di frutta.</p></div>
      </a>
      <a class="tile tile-c tile-plain" href="${ctx.root}speisekarte/#pinsa">
        ${icon('leaf', 'icon tile-icon')}
        <div class="tile-body"><h3>Pinsa und Antipasti</h3><p>Knusprige Pinsa Romana und eine kleine Auswahl von der Theke: Salumi, Formaggi, Gemüse.</p></div>
      </a>
      <div class="tile tile-d">
        <div>
          <h3>Mittags und abends</h3>
          <p>Montag bis Freitag mittags bis 15 Uhr und abends von 18 bis 21 Uhr, samstags bis 14 Uhr. Was heute frisch auf den Tisch kommt, steht auf der Tageskarte.</p>
        </div>
        <a class="btn btn-ghost" href="${ctx.root}tageskarte/">Zur Tageskarte${icon('arrow-right', 'icon icon-move')}</a>
      </div>
    </div>
  </div>
</section>

<div class="marquee" aria-label="Gerichte aus unserer Karte">
  <div class="marquee-track">
    <div>${GERICHTE.map((g) => `<span>${g}</span>`).join('')}</div>
    <div aria-hidden="true">${GERICHTE.map((g) => `<span>${g}</span>`).join('')}</div>
  </div>
</div>

<section class="section">
  <div class="wrap story">
    ${foto(ctx, 'theke', 'Die Theke der Osteria mit Antipasti-Platten, Salat, Feinkost und Wein', { cls: 'reveal-clip', sizes: '(min-width: 1024px) 66vw, 100vw' })}
    <div class="story-card reveal">
      <span class="eyebrow">I fratelli</span>
      <h2>Zwei Brüder, ein Haus</h2>
      <p class="muted">Seit ${SITE.seit} führt Fabio Meli das Lokal an der Felix-Dahn-Straße. ${SITE.fratelliSeit} kam sein Bruder Flavio dazu, und aus dem Bistro wurde das Fratelli: eine Osteria mit ganz italienischer Küche und Feinkost, bis hin zum Olivenöl vom Vater aus Sizilien.</p>
      <a class="text-link" href="${ctx.root}ueber-uns/">Mehr über uns${icon('arrow-right')}</a>
    </div>
  </div>
</section>

<section class="section-tight" aria-labelledby="teller-title">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">Dentro</span>
      <h2 id="teller-title">Kerzenlicht, Wein und Schachbrett</h2>
    </div>
    <div class="teller reveal-stagger">
      ${[
        ['detail-kerzen', 'Gedeckter Tisch mit Kerze und gefalteten Servietten', 'La sera'],
        ['detail-wein', 'Weinregal und Tafel mit dem italienischen Frühstück', 'Vini & colazione'],
        ['detail-theke', 'Theke mit Oliven, Feinkost und Weinkisten', 'Bottega'],
        ['detail-tisch', 'Stehtisch mit rotem Tischtuch auf dem Schachbrettboden', 'Aperitivo'],
      ]
        .map(([name, alt, titel]) => foto(ctx, name, alt, { ratio: 'portrait', sizes: '(min-width: 1024px) 25vw, 50vw' }).replace('</picture>', `</picture><figcaption>${titel}</figcaption>`))
        .join('')}
    </div>
    <a class="text-link mt-28" href="${ctx.root}galerie/">Alle Bilder ansehen${icon('arrow-right')}</a>
  </div>
</section>

${schachbrett()}

<section class="section" id="bewertungen" aria-labelledby="reviews-title">
  <div class="wrap">
    <div class="reviews-head">
      <div>
        <span class="eyebrow">Dicono di noi</span>
        <h2 id="reviews-title">Das sagen unsere Gäste</h2>
        <p class="google-note mt-12">${icon('google-logo')}Bewertungen auf Google</p>
      </div>
      <div class="rating" data-rating>
        <span class="rating-score" data-rating-score>${wert}</span>
        <div><span class="stars" data-rating-stars role="img" aria-label="${wert} von 5 Sternen">${sterne(SITE.googleBewertung)}</span><p class="fine" data-rating-count>${SITE.googleAnzahl} Bewertungen auf Google</p></div>
      </div>
    </div>
    <div class="reviews-track" data-reviews aria-live="polite">
      ${LOB.map(
        ([titel, text, ico]) => `<article class="review review-highlight">
        <span class="review-icon">${icon(ico)}</span>
        <h3>${titel}</h3>
        <p class="muted">${text}</p>
        <span class="stars">${sterne(5)}</span>
      </article>`,
      ).join('')}
    </div>
    <p class="fine mt-12" data-reviews-note>Das heben Gäste in ihren Google-Bewertungen besonders hervor.</p>
    <div class="cta-actions mt-28">
      <a class="btn btn-ghost" href="${SITE.mapsLink}" rel="noopener" target="_blank">Alle Bewertungen auf Google${icon('arrow-up-right')}</a>
      <a class="text-link" href="${SITE.reviewLink}" rel="noopener" target="_blank">Bewertung schreiben</a>
    </div>
  </div>
</section>

<section class="section-tight" aria-labelledby="gut-title">
  <div class="wrap">
    <h2 class="visually-hidden" id="gut-title">Gut zu wissen</h2>
    <div class="gut reveal-stagger">
      <div class="gut-item">${icon('sun')}<div><h3>Gartenterrasse</h3><p class="muted">Bei schönem Wetter sitzen Sie draußen im kleinen Garten.</p></div></div>
      <div class="gut-item">${icon('users-three')}<div><h3>Separater Raum</h3><p class="muted">Für Feiern und Firmenessen im kleinen Kreis.</p></div></div>
      <div class="gut-item">${icon('dog')}<div><h3>Hunde und Kinder</h3><p class="muted">Vierbeiner und Familien sind herzlich willkommen.</p></div></div>
      <div class="gut-item">${icon('coins')}<div><h3>Nur Barzahlung</h3><p class="muted">Bitte bringen Sie Bargeld mit. ${SITE.preisProPerson} pro Person.</p></div></div>
    </div>
  </div>
</section>

<section class="wrap">
  <div class="cta-band reveal">
    <div>
      <h2>Heute Abend schon was vor?</h2>
      <p>Rufen Sie uns an, wir halten Ihnen gern einen Tisch frei. Oder bestellen Sie vor und nehmen Ihre Pasta mit nach Hause.</p>
    </div>
    <div class="cta-actions">
      <a class="btn btn-lg" href="tel:${tel()}" data-track="anruf">${icon('phone')}Tisch telefonisch reservieren</a>
      <a class="btn btn-ghost btn-lg" href="${ctx.root}speisekarte/">Speisekarte ansehen</a>
    </div>
  </div>
</section>

${mitnehmen(ctx)}

${social(ctx)}

${besuch(ctx)}
`,
  scripts: ['reviews.js'],
};

export { GERICHTE, ZEITEN, zeitText };
