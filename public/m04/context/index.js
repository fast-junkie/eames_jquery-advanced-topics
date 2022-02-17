(($) => {
  $.fn.myPlugin = function _myPlugin() {
    const array = [this[0]];
    return this.pushStack(array);
  };
})(jQuery);

(($) => {
  $.fn.myPlugin2 = function _myPlugin() {
    return this;
  };
})(jQuery);

(() => {
  console.debug($('div').myPlugin());
  console.debug($('div').myPlugin().end());
})();
