import { icon, foto } from '../../tools/build.mjs';
import { SITE, tel } from '../site.mjs';
import { schachbrett } from '../teile.mjs';

export default {
  id: 'ueber-uns',
  slug: 'ueber-uns/',
  priority: 0.7,
  title: 'Über uns',
  description: `Die Osteria Fratelli in Degerloch: seit ${SITE.seit} von Fabio Meli geführt, seit ${SITE.fratelliSeit} mit Bruder Flavio. Italienische Küche, Feinkost und Olivenöl aus Sizilien.`,
  body: (ctx) => `
<section class="wrap page-hero">
  <span class="eyebrow">Chi siamo</span>
  <h1>Fratelli heißt Brüder</h1>
  <p class="lead">Eine kleine Osteria in Degerloch, in der man sich schnell wie zu Hause fühlt. Im Hintergrund läuft italienisches Radio, auf den Tischen brennen Kerzen, und der Gastgeber kennt seine Stammgäste beim Namen.</p>
</section>

<section class="wrap">
  ${foto(ctx, 'fenster-abend', 'Der Gastraum am Abend mit großen Fenstern, Kerzen, Weinkisten und goldenen Leuchten', { ratio: 'wide', cls: 'reveal-clip', sizes: '100vw', eager: true })}
</section>

<section class="section">
  <div class="wrap split">
    <div class="prose reveal">
      <h2>Vom Bistro zur Osteria</h2>
      <p class="muted" data-text="ueber_text">Fabio Meli führt das Haus an der Felix-Dahn-Straße seit ${SITE.seit}, damals noch als Bistro für Frühstück und Mittagstisch. ${SITE.fratelliSeit} kam sein jüngerer Bruder Flavio dazu, und mit ihm ein neuer Name: Fratelli, vero gusto italiano.</p>
      <p class="muted">Seitdem kocht die Küche ganz italienisch. Die Pasta machen wir selbst, die Gerichte wechseln mit Saison und Markt, und abends ist das Lokal inzwischen genauso lebendig wie am Morgen, wenn die ersten Gäste ihren Cappuccino trinken.</p>
    </div>
    ${foto(ctx, 'gastraum-tag', 'Der helle Gastraum am Tag mit olivgrünen Wänden, Holztischen und Schachbrettboden', { ratio: 'portrait', sizes: '(min-width: 1024px) 45vw, 100vw' })}
  </div>
</section>

${schachbrett()}

<section class="section" id="feinkost" aria-labelledby="feinkost-title">
  <div class="wrap split split-reverse">
    ${foto(ctx, 'detail-theke', 'Die Theke mit großen Gläsern Oliven, Feinkost und Weinkisten', { ratio: 'portrait', sizes: '(min-width: 1024px) 45vw, 100vw' })}
    <div class="prose reveal">
      <span class="eyebrow">Bottega</span>
      <h2 id="feinkost-title">Feinkost zum Mitnehmen</h2>
      <p class="muted">Was uns schmeckt, gibt es auch für zu Hause. In unseren Regalen stehen italienische Weine, Pasta und Antipasti, dazu Pinsa zum Fertigbacken.</p>
      <p class="muted">Und das Olivenöl kommt aus der Familie: Unser Vater presst es in Sizilien. Wir verwenden es in der Küche und verkaufen es in Flaschen, solange der Vorrat reicht.</p>
      <a class="text-link" href="tel:${tel()}" data-track="anruf">Vorrat erfragen: ${SITE.telefonAnzeige}${icon('arrow-right')}</a>
    </div>
  </div>
</section>

<section class="section-tight" aria-labelledby="raum-title">
  <div class="wrap">
    <div class="section-head reveal"><span class="eyebrow">La casa</span><h2 id="raum-title">Unser Gastraum</h2></div>
    <div class="duo reveal-stagger">
      ${foto(ctx, 'gastraum-abend', 'Gastraum am Abend mit Kerzenlicht und Schachbrettboden', { ratio: 'wide', sizes: '(min-width: 768px) 50vw, 100vw' })}
      ${foto(ctx, 'theke', 'Die Theke mit Antipasti und Feinkost', { ratio: 'wide', sizes: '(min-width: 768px) 50vw, 100vw' })}
      ${foto(ctx, 'detail-kerzen', 'Gedeckter Tisch mit Kerze am Abend', { ratio: 'wide', sizes: '(min-width: 768px) 50vw, 100vw' })}
      ${foto(ctx, 'detail-antipasti', 'Antipasti-Platten und Salat auf kleinen Tischen vor der Theke', { ratio: 'wide', sizes: '(min-width: 768px) 50vw, 100vw' })}
    </div>
    <a class="text-link mt-28" href="${ctx.root}galerie/">Alle Bilder in der Galerie${icon('arrow-right')}</a>
  </div>
</section>

<section class="section-tight">
  <div class="wrap">
    <div class="section-head reveal"><h2>Worauf Sie sich verlassen können</h2></div>
    <div class="values reveal-stagger">
      <div class="value value-feature">
        ${icon('cooking-pot')}
        <h3>Frisch und hausgemacht</h3>
        <p class="muted">Pasta aus eigener Herstellung, wechselnde Gerichte und kleine Antipasti zu moderaten Preisen. Frühstück, Mittag- und Abendessen von Montag bis Freitag, samstags bis zum Mittag.</p>
      </div>
      <div class="value">${icon('sun')}<h3>Gartenterrasse</h3><p class="muted">Bei schönem Wetter decken wir draußen im kleinen Garten.</p></div>
      <div class="value">${icon('users-three')}<h3>Separater Raum</h3><p class="muted">Für Geburtstag, Familienfeier oder Team-Essen: wir planen mit Ihnen.</p></div>
      <div class="value">${icon('dog')}<h3>Hunde willkommen</h3><p class="muted">Und Kinder sowieso. Bei uns geht es familiär zu.</p></div>
      <div class="value">${icon('storefront')}<h3>Zum Mitnehmen</h3><p class="muted">Alle Gerichte auch to go. Telefonisch vorbestellen, abholen, genießen. Wir liefern nicht.</p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="cta-band reveal">
      <div>
        <h2>Lernen Sie uns kennen</h2>
        <p>Am besten bei einem Teller Pasta und einem Glas Wein. Wir freuen uns auf Ihren Besuch.</p>
      </div>
      <div class="cta-actions">
        <a class="btn btn-lg" href="tel:${tel()}" data-track="anruf">${icon('phone')}Tisch reservieren</a>
        <a class="btn btn-ghost btn-lg" href="${ctx.root}kontakt/#anfrage">Feier anfragen</a>
      </div>
    </div>
  </div>
</section>
`,
};
