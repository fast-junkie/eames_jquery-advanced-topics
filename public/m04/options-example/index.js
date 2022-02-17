(() => {
  $('#div1').emphasize({ backColor: 'yellow' });
  $.fn.emphasize.defaults.backColor = 'lightgreen';
  $('#div2').emphasize();
})();
