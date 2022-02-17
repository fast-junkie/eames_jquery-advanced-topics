(($) => {
  let currentLevel = 0;
  $.fn.increaseEmphasis = function _increaseEmphasis() {
    currentLevel += 1;
    if (currentLevel === 1) return this.css('background-color', 'yellow');
    if (currentLevel === 2) return this.css('background-color', 'orange');
    return this.css('background-color', 'red');
  };
})(jQuery);

(($) => {
  $.fn.increaseEmphasisData = function _increaseEmphasisData() {
    if (!this.data('level')) this.data('level', '0');
    const currentLevel = parseInt(this.data('level'), 10) + 1;
    this.data('level', currentLevel);
    if (currentLevel === 1) return this.css('background-color', 'yellow');
    if (currentLevel === 2) return this.css('background-color', 'orange');
    return this.css('background-color', 'red');
  };
})(jQuery);

(() => {
  $.log('Using logger 2.0...');

  $('#button1').on('click', () => {
    $('#div1').increaseEmphasis();
  });
  $('#button2').on('click', () => {
    $('#div2').increaseEmphasis();
  });

  $('#button3').on('click', () => {
    $('#div3').increaseEmphasisData();
  });
  $('#button4').on('click', () => {
    $('#div4').increaseEmphasisData();
  });
})();
