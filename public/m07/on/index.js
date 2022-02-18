(() => {
  $('#myLink').on('click', handler1);
  $('#myLink').on('click', handler2);
  $('#container').on('click', () => { console.debug('clicked the div'); });

  function handler1(e) {
    console.debug('clicked 1');
    if ($('#stopDefault').is(':checked')) e.preventDefault();
    if ($('#stopPropagation').is(':checked')) e.stopPropagation();
    if ($('#stopPropagationImmediate').is(':checked')) e.stopImmediatePropagation();
  }
  function handler2() {
    console.debug('clicked 2');
  }
})();
