(() => {
  let selector;
  console.time('selection');
  selector = '#post-280 .entry-title';
  console.debug(`selecting ${$(selector).length} elements using "${selector}"`);
  for (let i = 0; i < 1000; i += 1) {
    const s = $(selector);
  }
  console.timeEnd('selection');

  console.time('selection');
  selector = '#post-280 h2.entry-title';
  console.debug(`selecting ${$(selector).length} elements using "${selector}"`);
  for (let i = 0; i < 1000; i += 1) {
    const s = $(selector);
  }
  console.timeEnd('selection');

  console.time('selection');
  console.debug(`selecting ${$('#post-280').children('.entry-title').length} elements using $('#post-280').children('.entry-title')`);
  for (let i = 0; i < 1000; i += 1) {
    const s = $('#post-280').children('.entry-title');
  }
  console.timeEnd('selection');

  console.time('selection');
  console.debug(`selecting ${$('#post-280').find('.entry-title').length} elements using $('#post-280').find('.entry-title')`);
  for (let i = 0; i < 1000; i += 1) {
    const s = $('#post-280').find('.entry-title');
  }
  console.timeEnd('selection');
})();
