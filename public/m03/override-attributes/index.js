(($) => {
  $.fn.old_attr = $.fn.attr;
  $.fn.attr = function _attr(name, value) {
    const args = [jQuery.myProps[name] || name, value];
    return $.fn.old_attr.apply(this, args);
  };

  $.myProps = {};
  $.myProps.mcp = 'myCustomProperty';
  $.myProps.pwrln = 'propertyWithReallyLongName';
})(jQuery);

(() => {
  $.log($('div').attr('mcp'));
  $('div').attr('mcp', 5);
  $.log($('div').attr('mcp'));
  $.log($('div').attr('pwrln'));
})();
