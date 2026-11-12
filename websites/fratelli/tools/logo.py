# Logo aus dem Original (weiß auf schwarz) freistellen. Aufruf: python3 tools/logo.py
# Ergebnis: public/assets/img/logo-dark.png (hell, für dunkle Flächen) und logo.png (dunkel, für helle Flächen).
# Die Trikolore-Linie behält ihre Farben, nur Schrift und Blatt wechseln zwischen Weiß und Tinte.
import sys
from PIL import Image

src = Image.open(sys.argv[1] if len(sys.argv) > 1 else 'tools/logo-original.png').convert('RGB')
w, h = src.size
px = src.load()
INK = (24, 27, 22)
CREAM = (246, 241, 230)
# Zeilen der Trikolore-Linie finden: dort liegen die farbigen Pixel.
def ist_bunt(r, g, b):
    a = max(r, g, b)
    return a >= 40 and (max(r, g, b) - min(r, g, b)) * 255 / a > 60
linie = [y for y in range(h) if sum(ist_bunt(*px[x, y]) for x in range(0, w, 3)) > 20]
LINIE = range(min(linie) - 2, max(linie) + 3) if linie else range(0)
SAND = (190, 176, 146)  # weißes Mittelstück der Linie auf hellem Grund
hell = Image.new('RGBA', (w, h))
dunkel = Image.new('RGBA', (w, h))
ph, pd = hell.load(), dunkel.load()
for y in range(h):
    for x in range(w):
        r, g, b = px[x, y]
        a = max(r, g, b)
        if a < 40:  # Hintergrund samt Kompressionsrauschen
            ph[x, y] = pd[x, y] = (0, 0, 0, 0)
            continue
        alpha = min(255, int((a - 40) * 255 / 175))
        f = 255 / a
        c = (min(255, int(r * f)), min(255, int(g * f)), min(255, int(b * f)))
        bunt = (max(c) - min(c)) > 60
        ph[x, y] = (*(c if bunt else CREAM), alpha)
        satt = tuple(int(v * 0.82) for v in c)  # auf Creme etwas kräftiger
        pd[x, y] = (*(satt if bunt else (SAND if y in LINIE else INK)), alpha)
box = hell.getbbox()
for img, name in ((hell, 'logo-dark'), (dunkel, 'logo')):
    out = img.crop(box)
    out = out.resize((round(out.width * 220 / out.height), 220), Image.LANCZOS)
    out.save(f'public/assets/img/{name}.png', optimize=True)
    print(name, out.size)

# Icons: das Blatt mit Löffel und Gabel aus dem Logo, cremefarben auf Olivschwarz.
blatt = hell.crop((885, 95, w, 250))
blatt = blatt.crop(blatt.getbbox())
GRUND = (20, 24, 19)
def icon(size, rund=True):
    from PIL import ImageDraw
    bild = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    maske = Image.new('L', (size, size), 0)
    ImageDraw.Draw(maske).rounded_rectangle((0, 0, size - 1, size - 1), radius=size // 5 if rund else 0, fill=255)
    bild.paste(Image.new('RGBA', (size, size), (*GRUND, 255)), (0, 0), maske)
    innen = int(size * 0.64)
    b = blatt.copy()
    b.thumbnail((innen, innen), Image.LANCZOS)
    bild.alpha_composite(b, ((size - b.width) // 2, (size - b.height) // 2))
    return bild
icon(180, rund=False).convert('RGB').save('public/assets/img/apple-touch-icon.png', optimize=True)
icon(192).save('public/assets/img/icon-192.png', optimize=True)
icon(512).save('public/assets/img/icon-512.png', optimize=True)
icon(64).save('public/assets/img/favicon.png', optimize=True)
icon(48).save('public/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
print('Icons')

# Social-Vorschau 1200 × 630: Gastraum am Abend, abgedunkelt, Logo in der Mitte.
from PIL import ImageEnhance, ImageFilter
foto = Image.open('public/assets/img/fotos/gastraum-abend-1600.webp').convert('RGB')
foto = foto.crop((0, 300, 1260, 300 + 662)).resize((1200, 630), Image.LANCZOS)
foto = ImageEnhance.Brightness(foto.filter(ImageFilter.GaussianBlur(1.5))).enhance(0.38).convert('RGBA')
l = Image.open('public/assets/img/logo-dark.png')
l = l.resize((640, round(640 * l.height / l.width)), Image.LANCZOS)
foto.alpha_composite(l, ((1200 - l.width) // 2, (630 - l.height) // 2))
foto.convert('RGB').save('public/assets/img/og.jpg', quality=84, optimize=True)
print('og.jpg')
