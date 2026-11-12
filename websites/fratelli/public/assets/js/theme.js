// Farbmodus vor dem ersten Zeichnen setzen, damit niemand ein weißes Aufblitzen sieht.
// Gespeicherte Wahl gewinnt.
(function () {
  var t = null;
  try {
    t = localStorage.getItem('fratelli.theme');
  } catch (e) {}
  // Ohne gespeicherte Wahl startet die Seite dunkel wie das Logo; hell ist per Knopf oben rechts umschaltbar.
  if (t !== 'light' && t !== 'dark') t = 'dark';
  document.documentElement.dataset.theme = t;
  document.documentElement.classList.add('js');
})();
