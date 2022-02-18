(() => {
  const $div1 = $('#div1');

  $div1.data('val1', 35);
  $div1.data('val2', 'a string');
  $div1.data('val3', 3.14);

  const val1 = $.data($div1.get(0), 'val1');
  console.debug('val1', val1);

  const data = $div1.data();
  console.debug('data', data);
  $.log(JSON.stringify(data));
})();
