import { karteSeite } from '../teile.mjs';

// Bild kommt aus dem Google-Drive-Ordner „Tageskarte“ (apps-script/Karten.gs, assets/js/karten.js).
export default {
  id: 'tageskarte',
  slug: 'tageskarte/',
  priority: 0.8,
  title: 'Tageskarte',
  description: 'Die Tageskarte der Osteria Fratelli in Degerloch: frische Pasta, Pinsa und wechselnde Gerichte von heute. Auch auf Instagram und Facebook.',
  body: (ctx) =>
    karteSeite(ctx, {
      bereich: 'tageskarte',
      titel: 'Tageskarte',
      eyebrow: 'Oggi',
      lead: 'Was heute frisch aus unserer Küche kommt: wechselnde Pasta, Pinsa und kleine Antipasti, solange der Vorrat reicht.',
      leer: 'Die Tageskarte für heute folgt in Kürze.',
    }),
  scripts: ['karten.js'],
};
