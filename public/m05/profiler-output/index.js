(() => {
  $('div').on('mouseenter mouseleave', handleMouseMove);

  function handleMouseMove() {
    console.time('hover');
    handleInner();
    console.timeEnd('hover');
  }
  function handleInner() {
    handleInnerMost();
    console.debug('inner');
  }
  function handleInnerMost() {
    console.debug('innerMost');
    (() => { console.debug('innerMost Anonymous'); })();
  }
})();
