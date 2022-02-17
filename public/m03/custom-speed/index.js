(() => {
  $.fx.speeds.slower = 2000;
  $.fx.speeds.ludicrous = 100;
  $('#fadingDiv')
    .on('click', function _click() {
      $(this)
        .fadeOut($('input:radio[name=group1]:checked').val(), function _cb() {
          $(this).show();
        });
    });
})();
