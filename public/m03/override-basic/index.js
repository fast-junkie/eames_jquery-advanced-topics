(($) => {
  $.old_merge = $.merge;
  $.merge = (first, second, third) => {
    $.old_merge(first, second);
    if (third) $.old_merge(first, third);
    return first;
  };
})(jQuery);

(() => {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [7, 8, 9];
  const merged = $.merge(array1, array2, array3);
  $.log(merged);
})();
