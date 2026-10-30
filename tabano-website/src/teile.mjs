// Bausteine, die auf mehreren Seiten vorkommen.
import { icon } from '../tools/build.mjs';
import { SITE, ZEITEN, KUECHE_BIS, zeitText } from './site.mjs';

/** Öffnungszeiten als Liste; die Zeile von heute wird im Browser markiert. */
export function zeitenListe() {
  return `<dl class="hours">${ZEITEN.map(
    (z) => `<div data-days="${z.days.join(',')}"><dt>${z.tage}</dt><dd>${zeitText(z.slots)}</dd></div>`,
  ).join('')}</dl>
  <p class="fine mt-12">Küche bis ${KUECHE_BIS} Uhr. An Feiertagen können die Zeiten abweichen.</p>`;
}

/** Karte mit Zwei-Klick-Lösung: Google Maps lädt erst nach Klick oder Zustimmung. */
export function karte(ctx) {
  return `<div class="map" data-map="${SITE.mapsEmbed}">
    <div class="map-consent">
      ${icon('map-pin')}
      <p><strong>Karte von Google Maps</strong></p>
      <p class="fine">Beim Laden der Karte werden Daten an Google übertragen. Mehr dazu in der <a href="${ctx.root}datenschutz/#maps">Datenschutzerklärung</a>.</p>
      <button type="button" class="btn btn-accent" data-map-load>Karte laden</button>
      <label class="check fine"><input type="checkbox" data-map-always> <span>Karten künftig immer laden</span></label>
      <a class="text-link" href="${SITE.mapsLink}" rel="noopener" target="_blank">In Google Maps öffnen${icon('arrow-up-right')}</a>
    </div>
  </div>`;
}

/** Abschnitt „Besuch“: Adresse, Zeiten, Anfahrt und Karte. */
export function besuch(ctx, { titel = 'So finden Sie uns', h = 'h2' } = {}) {
  return `<section class="section" id="besuch" aria-labelledby="besuch-title">
  <div class="wrap visit">
    <div class="reveal">
      <${h} id="besuch-title">${titel}</${h}>
      <p class="lead mt-12">${SITE.strasse}, ${SITE.plz} ${SITE.ort}. Im Stuttgarter Westen, wenige Gehminuten vom Feuersee.</p>
      ${zeitenListe()}
      <div class="cta-actions mt-28">
        <a class="btn btn-ghost" href="${SITE.mapsLink}" rel="noopener" target="_blank">${icon('map-pin')}Route planen</a>
        <a class="btn btn-ghost" href="tel:${SITE.telefon.replace(/\s/g, '')}" data-track="anruf">${icon('phone')}${SITE.telefonAnzeige}</a>
      </div>
    </div>
    ${karte(ctx)}
  </div>
</section>`;
}
