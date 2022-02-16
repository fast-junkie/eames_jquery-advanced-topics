(() => {
  $('input')
    .on('click', () => {
      $.getScript('script.js', (data, textStatus) => {
        console.debug('textStatus:', textStatus);
      });
    });

  $(document)
    .ajaxError((event, jqXHR, ajaxSettings, thrownError) => {
      console.debug('thrownError:', thrownError);
    });
})();
