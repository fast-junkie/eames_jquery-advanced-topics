(($) => {
  const methods = {
    emphasize() {
      return this.css('background-color', 'orange');
    },
    deEmphasize() {
      return this.css('background-color', 'white');
    },
  };

  $.fn.emphasize = function _emphasize(method, ...args) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(args, 1));
    }
    if (typeof method === 'object' || !method) {
      return methods.emphasize.apply(this, args);
    }
    $.error(`Method ${method} does not exist on jQuery.emphasize`);
    return false;
  };
})(jQuery);
