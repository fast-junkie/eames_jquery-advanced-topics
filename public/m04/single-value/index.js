(($) => {
  $.fn.average = function _average() {
    let sum = 0;
    this.each(function _iterator() {
      sum += parseFloat($(this).text());
    });
    return sum / $(this).length;
  };
})(jQuery);

(() => {
  console.debug($('div').average());
})();
