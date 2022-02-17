(($) => {
  $.fn.emphasize = function _emphasize(options) {
    const settings = {};
    $.extend(settings, this.emphasize.defaults, options);
    return this.css('background-color', settings.backColor);
  };

  $.fn.emphasize.defaults = {
    backColor: 'orange',
  };
})(jQuery);
