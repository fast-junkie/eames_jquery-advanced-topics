(() => {
  $.log('Using logger 2.0...');

  $('#div1').data('three', 3);
  $('#div1').data('four', 'four');
  $('#div1').data('Four', 'a different four');

  $.log($('#div1').data('three'));
  $.log(typeof $('#div1').data('three'));
  $.log($('#div1').data('four'));
  $.log($('#div1').data('Four'));
})();
