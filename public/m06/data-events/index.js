(() => {
  const div1 = $('#div1');

  // These do not fire...
  div1.on('setData', (e, key, value) => { console.debug('data set', key, value); });
  div1.on('changeData', (e, key, value) => { console.debug('data change', key, value); });
  div1.on('getData', (e, key, value) => { console.debug('data get', key, value); });
  // End...

  div1.data('val1', 5);
  const data = div1.data('val1');
  $.log(`data: ${data}`);

  const div3 = $('#div3');
  div3.on('getData', () => 25);

  div3.data('val1', 4);
  $.log(`div3.data(): ${div3.data('val1')}`);
})();
