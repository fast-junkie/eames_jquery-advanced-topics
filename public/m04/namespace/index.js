(() => {
  $('#emphasize').on('click', () => { $('#div1').emphasize(); });
  $('#deemphasize').on('click', () => { $('#div1').emphasize('deEmphasize'); });
})();
