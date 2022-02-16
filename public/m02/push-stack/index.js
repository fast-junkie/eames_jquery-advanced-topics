(() => {
  $.fn.everyThird = function _everyThird() {
    const arr = [];
    $.each(this, (idx, item) => {
      if (idx % 3 === 0) {
        arr.push(item);
      }
    });
    return this.pushStack(arr, 'everyThird', '');
  };

  $('#clickme')
    .on('click', () => {
      console.debug('click fired...');
      $('div')
        .everyThird()
        .css('color', 'red')
        .end()
        .css('font-weight', '700');
    });
})();
