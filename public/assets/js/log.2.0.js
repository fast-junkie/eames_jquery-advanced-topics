(($) => {
  $.log = function _log(msg) {
    let $output = $('#output');
    if ($output.length === 0) {
      $output = $('<div/>').attr('id', 'output');
      $('body').append($output);
    }
    const $div = $('<div/>').append(msg);
    $output.append($div);
  };
})(jQuery);
