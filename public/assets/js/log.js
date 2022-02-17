(($) => {
  $.log = (value) => {
    if (console) console.log(value);
  };
  $.log.group = (value) => {
    if (console && console.group) console.group(value);
  };
  $.log.groupEnd = () => {
    if (console && console.group) console.groupEnd();
  };
})(jQuery);
