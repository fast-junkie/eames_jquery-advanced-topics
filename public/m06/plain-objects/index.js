(() => {
  const myObj = {
    val1: 3,
    val2: 'hi',
    sayHi() { console.debug('hi there'); },
  };
  console.debug(myObj);

  $(myObj).data('val3', 3);
  console.debug(myObj);
})();
