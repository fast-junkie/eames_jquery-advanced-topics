(() => {
  console.debug($('#div1').data('myValue'));

  $('#div1').data('myValue', '4');
  console.debug($('#div1').data('myValue'));

  console.debug($('#div1').get(0));
  console.debug($('#div1').data());
})();
