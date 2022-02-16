(() => {
  callAnotherFunction(functionToCall);

  function callAnotherFunction(arg1, arg2, arg3) {
    const times = $.isNumeric(arg1) ? arg1 : 4;
    const delay = $.isNumeric(arg2) ? arg2 : 1000;
    const funcToCall = isFunction(arg1) ? arg1 : isFunction(arg2) ? arg2 : arg3;

    let i = 0;
    (function loopit() {
      i += 1;
      funcToCall();
      if (i < times) setTimeout(loopit, delay);
    }());
  }
  function isFunction(fnc) {
    return typeof fnc === 'function';
  }
  function functionToCall() {
    $('#output').append('<br />function called');
  }
})();
