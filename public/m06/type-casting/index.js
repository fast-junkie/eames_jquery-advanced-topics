(() => {
  const $div1 = $('#div1');
  console.debug('data', $div1.data());
  console.debug('numeric + 65', $div1.data('numeric') + 65);
  console.debug('string + 65', $div1.data('string') + 65);
  console.debug('bool !== true', $div1.data('bool') !== true);
})();
