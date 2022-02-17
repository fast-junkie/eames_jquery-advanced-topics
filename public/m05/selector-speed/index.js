(() => {
  let selector;
  console.time('selection');
  selector = 'ul.method-list li.keynav h2.entry-title';
  console.debug(`selecting ${$(selector).length} elements using "${selector}"`);
  for (let i = 0; i < 1000; i += 1) {
    const s = $(selector);
  }
  console.timeEnd('selection');

  console.time('selection');
  selector = 'ul li.keynav h2.entry-title';
  console.debug(`selecting ${$(selector).length} elements using "${selector}"`);
  for (let i = 0; i < 1000; i += 1) {
    const s = $(selector);
  }
  console.timeEnd('selection');

  console.time('selection');
  selector = 'li.keynav h2.entry-title';
  console.debug(`selecting ${$(selector).length} elements using "${selector}"`);
  for (let i = 0; i < 1000; i += 1) {
    const s = $(selector);
  }
  console.timeEnd('selection');

  console.time('selection');
  selector = 'li h2.entry-title';
  console.debug(`selecting ${$(selector).length} elements using "${selector}"`);
  for (let i = 0; i < 1000; i += 1) {
    const s = $(selector);
  }
  console.timeEnd('selection');

  console.time('selection');
  selector = 'h2.entry-title';
  console.debug(`selecting ${$(selector).length} elements using "${selector}"`);
  for (let i = 0; i < 1000; i += 1) {
    const s = $(selector);
  }
  console.timeEnd('selection');

  console.time('selection');
  selector = '.entry-title';
  console.debug(`selecting ${$(selector).length} elements using "${selector}"`);
  for (let i = 0; i < 1000; i += 1) {
    const s = $(selector);
  }
  console.timeEnd('selection');
})();
