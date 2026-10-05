import { icon, foto } from '../../tools/build.mjs';
import { SITE } from '../site.mjs';

export default {
  id: 'ueber-uns',
  slug: 'ueber-uns/',
  priority: 0.7,
  title: 'Über uns',
  description:
    'Die Trattoria Tabano ist eine feste Adresse im Stuttgarter Westen. Die Gastgeber Ludovico Bellusci und Angelo D\'Agostino über Küche, Wein und ihr Haus.',
  body: (ctx) => `
<section class="wrap page-hero">
  <h1>Unser Tabano</h1>
  <p class="lead">Eine Trattoria an der Ecke, in der man sich schnell zu Hause fühlt. Mit italienischer Küche von Südtirol bis Sizilien und Gastgebern, die ihre Gäste kennen.</p>
</section>

<section class="wrap">
  ${foto(ctx, 'aussen-nacht', 'Eingang der Trattoria Tabano bei Nacht mit beleuchtetem Schriftzug und Logo', { ratio: 'wide', cls: 'reveal-clip media-focus-top', sizes: '100vw', eager: true })}
</section>

<section class="section">
  <div class="wrap split">
    <div class="prose reveal">
      <h2>Gastgeber aus Leidenschaft</h2>
      <p class="muted">Hinter dem Tabano stehen ${SITE.inhaber[0]} und ${SITE.inhaber[1]}. Beide leben Gastronomie seit vielen Jahren und haben mit dem Tabano einen Ort geschaffen, an dem Stammgäste mit Namen begrüßt werden und neue Gäste schnell dazugehören.</p>
      <p class="muted">Gekocht wird, was Italien auf den Tisch bringt: frische Pasta, Fisch nach Marktlage, Kalb und Rind vom Grill und Pizza. Dazu passende Weine aus den Regionen, aus denen auch die Rezepte kommen.</p>
      <div class="people">
        <div class="person"><strong>${SITE.inhaber[0]}</strong><span class="muted">Gastgeber</span></div>
        <div class="person"><strong>${SITE.inhaber[1]}</strong><span class="muted">Gastgeber</span></div>
      </div>
    </div>
    ${foto(ctx, 'gastraum', 'Gastraum der Trattoria Tabano mit Holztischen und Bildern an der Wand', { ratio: 'portrait', sizes: '(min-width: 1024px) 45vw, 100vw' })}
  </div>
</section>

<section class="section-tight">
  <div class="wrap">
    <div class="section-head reveal"><h2>Worauf Sie sich verlassen können</h2></div>
    <div class="values reveal-stagger">
      <div class="value value-feature">
        ${icon('cooking-pot')}
        <h3>Frisch gekocht, jeden Tag</h3>
        <p class="muted">Pasta aus dem eigenen Haus, Saucen mit Zeit, Fisch nach Marktlage. Mittags gibt es wechselnde Tagesgerichte, abends die ganze Karte bis 23 Uhr.</p>
      </div>
      <div class="value">${icon('wine')}<h3>Italienische Weine</h3><p class="muted">Von Südtirol bis Sizilien, glasweise und in der Flasche.</p></div>
      <div class="value">${icon('leaf')}<h3>Vegetarisch und glutenfrei</h3><p class="muted">Viele Gerichte auf Wunsch angepasst, sprechen Sie uns an.</p></div>
      <div class="value">${icon('users-three')}<h3>Feiern und Gruppen</h3><p class="muted">Geburtstag, Team-Essen oder Familienfeier: wir planen mit Ihnen.</p></div>
      <div class="value">${icon('storefront')}<h3>Zum Mitnehmen</h3><p class="muted">Telefonisch bestellen und im Restaurant abholen.</p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="cta-band reveal">
      <div>
        <h2>Lernen Sie uns kennen</h2>
        <p>Am besten bei einem Teller Pasta. Wir freuen uns auf Ihren Besuch.</p>
      </div>
      <div class="cta-actions">
        <a class="btn btn-lg" href="${ctx.root}reservierung/">${icon('calendar-check')}Tisch reservieren</a>
        <a class="btn btn-ghost btn-lg" href="${ctx.root}kontakt/#anfrage">Feier anfragen</a>
      </div>
    </div>
  </div>
</section>
`,
};
