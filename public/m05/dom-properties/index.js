(() => {
  console.time('jQuery property');
  jqueryProperty();
  console.timeEnd('jQuery property');

  console.time('DOM property');
  domProperty();
  console.timeEnd('DOM property');

  function jqueryProperty() {
    let s = [];
    const $div = $('div');
    for (let i = 0; i < 1e4; i += 1) {
      s = $div.attr('id');
    }
    console.debug('jQuery property s:', s);
  }
  function domProperty() {
    let s = [];
    const $div = $('div');
    for (let i = 0; i < 1e4; i += 1) {
      s = $div[0].id;
    }
    console.debug('DOM property s:', s);
  }
})();
