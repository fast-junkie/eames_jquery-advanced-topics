(() => {
  const myFunc = () => {
    console.debug("i've called my function");
    return 'my func was called';
  };

  const div1 = $('#div1');
  const myobj = { val1: 3, val2: 'hi', sayHi() { console.debug('Wurd...'); } };

  div1.data('dom', $('#div1')[0]);
  div1.data('func', myFunc);
  div1.data('jq', $('#div1'));
  div1.data('myObj', myobj);

  console.debug(div1.data());
  div1.removeData();

  // Cleaned up...
  console.debug(div1.data());
})();
