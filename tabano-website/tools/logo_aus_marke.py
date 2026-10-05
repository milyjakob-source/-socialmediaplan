# Baut logo.svg, logo-dark.svg, favicon.svg und src/marke.svg aus der vektorisierten Bildmarke (mark-raw.svg,
# erzeugt mit potrace aus dem Logo-Foto). Braucht: pip install fonttools brotli; logo_platzhalter.py für text_path.

import re
exec(open('tools/logo_platzhalter.py').read().split('# Wordmark')[0])
W='/home/user/-socialmediaplan/tabano-website/public/assets'
raw=open('tools/mark-raw.svg').read()
d=re.search(r' d="([^"]+)"',raw).group(1)
nums=[float(x) for x in re.findall(r'-?\d+\.?\d*',d)]
xs=nums[0::2]; ys=nums[1::2]
x0,x1,y0,y1=min(xs),max(xs),min(ys),max(ys)
print('bbox',x0,x1,y0,y1)
S=max(x1-x0,y1-y0)
# mark scaled into 50x50 box
sc=48/S
mark=f'<path fill-rule="evenodd" transform="translate({1-x0*sc:.3f},{1-y0*sc:.3f}) scale({sc:.5f})" d="{d}"/>'
word,wx=text_path(brico,'TABANO.',27,64,36,0.6)
w=wx+2
for name,ink in [('logo.svg','#151a17'),('logo-dark.svg','#eceee8')]:
    open(W+'/img/'+name,'w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.1f} 50" width="{w*0.88:.0f}" height="44" role="img" aria-label="Trattoria Tabano"><g fill="{ink}">{mark}<path d="{word}"/></g></svg>')
# Favicon: Marke auf hellem Grund
fm=f'<path fill-rule="evenodd" fill="#151a17" transform="translate({(64-50*0.8)/2 - x0*sc*0.8:.3f},{(64-50*0.8)/2 - y0*sc*0.8:.3f}) scale({sc*0.8:.5f})" d="{d}"/>'
open(W+'/img/favicon.svg','w').write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#fafbf8"/>{fm}</svg>')
mk=mark.replace('<path ','<path fill="currentColor" ')
open('/home/user/-socialmediaplan/tabano-website/src/marke.svg','w').write('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">'+mk+'</svg>')
print('ok', w)
