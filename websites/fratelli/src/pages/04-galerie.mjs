import { icon, foto } from '../../tools/build.mjs';
import { SITE, tel } from '../site.mjs';

// Reihenfolge der Galerie. Dateinamen entsprechen den Fotos in bilder-original/ (siehe README).
// Weitere Fotos: Datei nach bilder-original/, npm run bilder, hier eintragen.
const BILDER = [
  ['gastraum-abend', 'Der Gastraum am Abend: Kerzen, weiße Servietten und der Schachbrettboden'],
  ['theke', 'Unsere Theke mit Antipasti, Salat, Feinkost und Wein'],
  ['gastraum-tag', 'Der helle Gastraum am Tag mit olivgrünen Wänden und Weinregalen'],
  ['fenster-abend', 'Fensterplätze am Abend mit goldenen Leuchten'],
  ['detail-kerzen', 'Gedeckter Tisch mit Kerze'],
  ['detail-wein', 'Weinregal und die Tafel mit dem italienischen Frühstück'],
  ['detail-leuchte', 'Leuchte mit goldenem Schein'],
  ['detail-theke', 'Oliven, Feinkost und Weinkisten an der Theke'],
  ['detail-tisch', 'Stehtisch mit rotem Tischtuch'],
  ['detail-antipasti', 'Antipasti-Platten und Salat vor der Theke'],
];

export default {
  id: 'galerie',
  slug: 'galerie/',
  priority: 0.6,
  title: 'Galerie',
  description:
    'Bilder aus der Osteria Fratelli in Degerloch: Gastraum mit Schachbrettboden, Kerzenlicht, Theke mit Antipasti und Feinkost.',
  body: (ctx) => `
<section class="wrap page-hero">
  <h1>Einblicke</h1>
  <p class="lead">Olivgrüne Wände, goldene Spiegel, Kerzenlicht und der Schachbrettboden. So sieht es bei uns aus.</p>
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
    <a class="btn btn-accent" href="tel:${tel()}" data-track="anruf">${icon('phone')}Tisch reservieren</a>
    <a class="btn btn-ghost" href="${ctx.root}speisekarte/">Speisekarte</a>
  </div>
</section>
`,
};
