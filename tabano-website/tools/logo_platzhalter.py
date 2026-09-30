# Erzeugt das Platzhalter-Logo (Wortmarke aus Bricolage Grotesque als Pfade) und das Favicon.
# Nur nötig, solange das Original-Logo fehlt. Braucht: pip install fonttools brotli

from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
W='/home/user/-socialmediaplan/tabano-website/public/assets'
def inst(path, **axes):
    f=TTFont(path); return instantiateVariableFont(f, axes)
brico=inst(W+'/fonts/bricolage-grotesque.woff2', wght=700, opsz=96)
geist=inst(W+'/fonts/geist.woff2', wght=600)

def text_path(font, s, size, x0=0, y0=0, tracking=0):
    gs=font.getGlyphSet(); cmap=font.getBestCmap(); upm=font['head'].unitsPerEm
    sc=size/upm; x=x0; d=[]
    hmtx=font['hmtx']
    for ch in s:
        g=cmap[ord(ch)]
        pen=SVGPathPen(gs)
        tp=TransformPen(pen,(sc,0,0,-sc,x,y0))
        gs[g].draw(tp)
        d.append(pen.getCommands())
        x+=hmtx[g][0]*sc+tracking
    return ' '.join(d), x-tracking
# Wordmark
word, wx = text_path(brico,'Tabano',40,0,33,-0.8)
sub, sx = text_path(geist,'TRATTORIA',8.2,1,46,2.35)
w=max(wx+9,sx)+2
for name,ink,acc in [('logo.svg','#151a17','#b3351f'),('logo-dark.svg','#eceee8','#f0785c')]:
    svg=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.1f} 50" width="{w*0.8:.0f}" height="40" role="img" aria-label="Trattoria Tabano"><path fill="{ink}" d="{word}"/><path fill="{acc}" d="{sub}"/><circle cx="{wx+5.6:.1f}" cy="30.4" r="4.2" fill="{acc}"/></svg>'''
    open(W+'/img/'+name,'w').write(svg)
# Favicon: T in rounded square
T, tx = text_path(brico,'T',44,0,0)
from fontTools.pens.boundsPen import BoundsPen
bp=BoundsPen(brico.getGlyphSet()); brico.getGlyphSet()[brico.getBestCmap()[ord('T')]].draw(bp)
xmin,ymin,xmax,ymax=bp.bounds; sc=44/brico['head'].unitsPerEm
gw=(xmax-xmin)*sc; gh=(ymax-ymin)*sc
ox=(64-gw)/2 - xmin*sc; oy=(64+gh)/2 + ymin*sc
T,_=text_path(brico,'T',44,ox,oy)
fav=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#b3351f"/><path fill="#fafbf8" d="{T}"/></svg>'''
open(W+'/img/favicon.svg','w').write(fav)
print(w, 'ok')
