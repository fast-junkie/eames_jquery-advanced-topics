(() => {
  const interval = setInterval(init, 1e2);
  function init() {
    if (document.readyState === 'complete') {
      clearInterval(interval);
      console.info('complete...');

      const $body = $('body');
      const $div = $('<div/>');
      const $button = $('<button/>');
      $button
        .addClass('back')
        .html('&laquo; Back')
        .on('click', () => {
          window.history.back();
        });

      $body.append($div.append($button));
    }
  }
})();
