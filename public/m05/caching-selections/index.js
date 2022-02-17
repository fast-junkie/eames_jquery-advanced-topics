(() => {
  console.time('no caching');
  noCaching();
  console.timeEnd('no caching');

  console.time('caching');
  caching();
  console.timeEnd('caching');

  function noCaching() {
    let s = [];
    for (let i = 0; i < 1e4; i += 1) {
      s = $('div');
    }
    console.debug('no caching s:', s);
  }
  function caching() {
    let s = [];
    const $div = $('div');
    for (let i = 0; i < 1e4; i += 1) {
      s = $div;
    }
    console.debug('caching s:', s);
  }
})();
