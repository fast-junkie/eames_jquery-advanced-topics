(() => {
  createDivs();

  console.time('no caching');
  noCaching();
  console.timeEnd('no caching');

  console.time('caching');
  caching();
  console.timeEnd('caching');

  function createDivs() {
    const arrLen = 10000;
    const arr = [arrLen];
    for (let i = 0; i < arrLen; i += 1) {
      arr[i] = i;
    }
    let str = '';
    $.each(arr, function _iterator() {
      str += `<div>${this}</div>`;
    });
    $('#parent').append(`<div>${str}</div>`);
  }
  function noCaching() {
    let sum = 0;
    const divs = $('div');
    for (let j = 0; j < divs.length; j += 1) {
      sum += j;
    }
    $.log(`noCaching sum: ${sum}`);
  }
  function caching() {
    let sum = 0;
    const divs = $('div');
    const len = divs.length;
    for (let j = 0; j < len; j += 1) {
      sum += j;
    }
    $.log(`caching sum: ${sum}`);
  }
})();
