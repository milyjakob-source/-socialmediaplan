import { icon, foto } from '../../tools/build.mjs';
import { SITE } from '../site.mjs';

// Reihenfolge der Galerie. Dateinamen entsprechen den Fotos in bilder-original/ (siehe README).
// Weitere Fotos: Datei nach bilder-original/, npm run bilder, hier eintragen.
const BILDER = [
  ['gastraum', 'Gastraum mit Holztischen, Stuckdecke und Bildern an der Wand'],
  ['pizza', 'Pizza Margherita mit Basilikum'],
  ['aussen-nacht', 'Der Eingang bei Nacht mit beleuchtetem Schriftzug'],
  ['aussen-tag', 'Das Eckhaus an der Silberburgstraße am Abend'],
];

export default {
  id: 'galerie',
  slug: 'galerie/',
  priority: 0.6,
  title: 'Galerie',
  description:
    'Bilder aus der Trattoria Tabano in Stuttgart-West: Gastraum, Bar, Pasta, Pizza und Dolci. Ein Eindruck, bevor Sie uns besuchen.',
  body: (ctx) => `
<section class="wrap page-hero">
  <h1>Einblicke</h1>
  <p class="lead">Gastraum, Bar und Küche. So sieht ein Abend im Tabano aus.</p>
</section>

<section class="wrap">
  <div class="gallery reveal-stagger">
    ${BILDER.map(([name, alt]) =>
      foto(ctx, name, alt, { sizes: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw' }).replace(
        '</picture>',
        `</picture><figcaption>${alt}</figcaption>`,
      ),
    ).join('')}
  </div>
  <div class="cta-actions mt-28">
    ${SITE.social.instagram ? `<a class="btn btn-ghost" href="${SITE.social.instagram}" rel="noopener" target="_blank">${icon('instagram-logo')}Mehr auf Instagram</a>` : ''}
    <a class="btn btn-accent" href="${ctx.root}reservierung/">${icon('calendar-check')}Tisch reservieren</a>
  </div>
</section>
`,
};
