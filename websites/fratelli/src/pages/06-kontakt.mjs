import { icon } from '../../tools/build.mjs';
import { SITE, tel } from '../site.mjs';
import { besuch } from '../teile.mjs';

export default {
  id: 'kontakt',
  slug: 'kontakt/',
  priority: 0.8,
  title: 'Kontakt & Anfahrt',
  description:
    'Osteria Fratelli, Epplestraße 10 (Eingang Felix-Dahn-Straße), 70597 Stuttgart-Degerloch. Telefon 0711 7683916. Zeiten, Anfahrt und Anfragen.',
  body: (ctx) => `
<section class="wrap page-hero">
  <h1>Kontakt & Anfahrt</h1>
  <p class="lead">Tische reservieren Sie am besten telefonisch während der Öffnungszeiten. Für Feiern im separaten Raum, Gruppen und Gutscheine schreiben Sie uns gern.</p>
  <div class="cta-actions">
    <a class="btn btn-accent btn-lg" href="tel:${tel()}" data-track="anruf">${icon('phone')}${SITE.telefonAnzeige}</a>
    <a class="btn btn-ghost btn-lg" href="mailto:${SITE.email}">${icon('envelope')}${SITE.email}</a>
    <a class="btn btn-ghost btn-lg" href="${SITE.social.instagram}" rel="noopener" target="_blank" data-track="instagram">${icon('instagram-logo')}@${SITE.instagramName}</a>
  </div>
</section>

${besuch(ctx, { titel: 'Anfahrt und Öffnungszeiten' })}

<section class="section-tight" id="anfrage">
  <div class="wrap form-layout">
    <div class="form-card">
      <h2 class="mt-12">Anfrage schicken</h2>
      <p class="muted mt-12">Wir antworten in der Regel innerhalb von ein bis zwei Tagen. Tische reservieren Sie am einfachsten telefonisch unter <a href="tel:${tel()}">${SITE.telefonAnzeige}</a>.</p>
      <form class="form mt-28" name="anfrage" method="POST" data-netlify="true" netlify-honeypot="bot-field" data-guard data-inquiry novalidate>
        <input type="hidden" name="form-name" value="anfrage">
        <input type="hidden" name="t0" value="">
        <p class="hp" aria-hidden="true"><label>Bitte leer lassen <input name="bot-field" tabindex="-1" autocomplete="off"></label></p>

        <div class="field">
          <label for="a-thema">Worum geht es?</label>
          <select class="input" id="a-thema" name="thema" required data-msg-required="Bitte ein Thema wählen.">
            <option value="Feier oder Gruppe">Feier, Gruppe oder separater Raum</option>
            <option value="Feinkost">Feinkost, Wein oder Olivenöl</option>
            <option value="Gutschein">Gutschein</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
          <p class="field-error" role="alert"></p>
        </div>

        <div class="form-row">
          <div class="field">
            <label for="a-name">Name</label>
            <input class="input" id="a-name" name="name" autocomplete="name" required maxlength="80">
            <p class="field-error" role="alert"></p>
          </div>
          <div class="field">
            <label for="a-mail">E-Mail</label>
            <input class="input" id="a-mail" name="email" type="email" autocomplete="email" required maxlength="120">
            <p class="field-error" role="alert"></p>
          </div>
        </div>

        <div class="form-row-3 form-row">
          <div class="field">
            <label for="a-tel">Telefon <span class="opt">(optional)</span></label>
            <input class="input" id="a-tel" name="telefon" type="tel" autocomplete="tel" maxlength="30" data-validate="phone">
            <p class="field-error" role="alert"></p>
          </div>
          <div class="field">
            <label for="a-datum">Wunschdatum <span class="opt">(optional)</span></label>
            <input class="input" id="a-datum" name="datum" type="date">
            <p class="field-error" role="alert"></p>
          </div>
          <div class="field">
            <label for="a-pers">Personen <span class="opt">(optional)</span></label>
            <input class="input" id="a-pers" name="personen" type="number" min="1" max="120" inputmode="numeric">
            <p class="field-error" role="alert"></p>
          </div>
        </div>

        <div class="field">
          <label for="a-text">Nachricht</label>
          <textarea class="input" id="a-text" name="nachricht" required maxlength="2000" data-msg-required="Was dürfen wir für Sie tun?"></textarea>
          <p class="field-error" role="alert"></p>
        </div>

        <div class="field">
          <label class="check"><input type="checkbox" name="datenschutz" required data-msg-required="Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu."> <span>Ich bin einverstanden, dass meine Angaben zur Beantwortung der Anfrage gespeichert werden. Mehr in der <a href="${ctx.root}datenschutz/#kontakt">Datenschutzerklärung</a>.</span></label>
          <p class="field-error" role="alert"></p>
        </div>

        <div class="form-status is-error" data-form-error role="alert">${icon('warning')}<span></span></div>
        <button class="btn btn-accent btn-lg" type="submit">${icon('envelope')}Anfrage senden</button>
      </form>
    </div>
    <aside class="aside-list" aria-label="Weitere Kontaktwege">
      <div class="aside-item">${icon('coins')}<div><h2 class="aside-title">Nur Barzahlung</h2><p class="muted">Karten nehmen wir leider nicht an. Bitte bringen Sie Bargeld mit.</p></div></div>
      <div class="aside-item">${icon('gift')}<div><h2 class="aside-title">Gutscheine</h2><p class="muted">Ein Abend im Fratelli zum Verschenken. Gutscheine gibt es im Restaurant oder auf Anfrage.</p></div></div>
      <div class="aside-item">${icon('users-three')}<div><h2 class="aside-title">Feiern und Firmenessen</h2><p class="muted">Unser separater Raum eignet sich für Feiern im kleinen Kreis. Sagen Sie uns Anlass, Datum und Personenzahl, wir melden uns mit einem Vorschlag.</p></div></div>
      <div class="aside-item">${icon('train')}<div><h2 class="aside-title">Mit Bus und Bahn</h2><p class="muted">Haltestelle Degerloch (Stadtbahn und Zahnradbahn) wenige Gehminuten entfernt.</p></div></div>
      <div class="aside-item">${icon('car')}<div><h2 class="aside-title">Mit dem Auto</h2><p class="muted">Parkplätze in den umliegenden Straßen. Der Eingang liegt an der Felix-Dahn-Straße.</p></div></div>
    </aside>
  </div>
</section>
`,
  scripts: ['anfrage.js'],
};
