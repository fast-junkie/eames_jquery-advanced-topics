(() => {
  $.log.group('My group...');
  $.log('Wurd...');
  $.log($('div'));
  $.log.groupEnd();
  $.log($('div')[0].innerHTML);
})();
