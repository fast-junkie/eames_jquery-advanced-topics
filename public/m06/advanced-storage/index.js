(() => {
  const $div1 = $('#div1');
  const object1 = { val1: 3, val2: 'hi' };
  $div1.data('object1', object1);
  console.debug($div1.data('object1'));

  const { val1, val2 } = $div1.data('object1');
  console.debug('val1, val2', val1, val2);

  const myFunc = () => {
    $.log("i've called my function");
  };
  $div1.data('func', myFunc);
  $div1.data('func')();

  const object2 = {
    val1: 3,
    val2: 'hi',
    sayHi() {
      $.log('Wurd...');
    },
  };
  $div1.data('object2', object2);
  $div1.data('object2').sayHi();
  console.debug($div1.data('object2').sayHi);

  $div1.data('dom', $div1.get(0));
  console.debug($div1.data('dom'));

  $div1.data('jq', $('#div1'));
  console.debug($div1.data('jq'));

  $.data($div1.get(0), 'more', 56);

  // const data = $div1.data();
  // $.log(JSON.stringify(data));
})();
