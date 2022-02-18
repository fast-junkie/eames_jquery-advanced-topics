(() => {
  console.debug($('#div1').get(0));
  console.debug($('#div1').data('value'));
  $('#div1').data('value', 4);
  console.debug($('#div1').get(0));
})();
