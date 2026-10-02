# Erzeugt eine typografische Wortmarke „il pomodoro“ mit runder Tomaten-Bildmarke (logo.svg, logo-dark.svg)
# und das Favicon. Nur nötig, solange das Original-Logo fehlt. Braucht: pip install fonttools brotli
# Aufruf aus dem Projektordner: python3 tools/logo_platzhalter_pomodoro.py
exec(open('tools/schrift.py').read())
W = 'public/assets'
il, ilx = text_path(geist, 'il', 26, 50, 34, 0)
po, pox = text_path(brico, 'pomodoro', 30, ilx + 6, 34, -0.4)
w = pox + 4
def mark(cx, cy, r, red, leaf):
    # Tomate: Kreis, darauf ein kleiner Stiel aus zwei Rechtecken (geometrisch, keine Illustration)
    return (f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{red}"/>'
            f'<rect x="{cx-1.6:.1f}" y="{cy-r-4:.1f}" width="3.2" height="7" rx="1.6" fill="{leaf}"/>'
            f'<rect x="{cx-7:.1f}" y="{cy-r+0.5:.1f}" width="14" height="3.4" rx="1.7" fill="{leaf}"/>')
for name, ink, red in [('logo.svg', '#151a17', '#b3351f'), ('logo-dark.svg', '#eceee8', '#f0785c')]:
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.1f} 50" width="{w*0.88:.0f}" height="44" role="img" aria-label="Il Pomodoro">'
           f'{mark(24, 28, 17, red, "#3f7d3a")}<path fill="{ink}" d="{il}"/><path fill="{ink}" d="{po}"/></svg>')
    open(f'{W}/img/{name}', 'w').write(svg)
P, _ = text_path(brico, 'P', 30, 0, 0)
from fontTools.pens.boundsPen import BoundsPen
bp = BoundsPen(brico.getGlyphSet()); brico.getGlyphSet()[brico.getBestCmap()[ord('P')]].draw(bp)
x0, y0, x1, y1 = bp.bounds; sc = 30 / brico['head'].unitsPerEm
ox = 32 - (x1 - x0) * sc / 2 - x0 * sc; oy = 37 + 0  # Grundlinie etwas unter der Mitte
P, _ = text_path(brico, 'P', 30, ox, oy)
fav = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#fafbf8"/>'
       '<circle cx="32" cy="35" r="23" fill="#b3351f"/><rect x="30.2" y="6" width="3.6" height="9" rx="1.8" fill="#3f7d3a"/>'
       '<rect x="23" y="11.5" width="18" height="4" rx="2" fill="#3f7d3a"/>'
       f'<path fill="#fafbf8" d="{P}"/></svg>')
open(f'{W}/img/favicon.svg', 'w').write(fav)
print('ok', w)
