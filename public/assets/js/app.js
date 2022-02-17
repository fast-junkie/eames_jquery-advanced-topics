(() => {
  const interval = setInterval(init, 1e2);
  function init() {
    if (document.readyState === 'complete') {
      clearInterval(interval);
      setBackButton();
      console.info('complete...');
    }
  }

  function setBackButton() {
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
})();
