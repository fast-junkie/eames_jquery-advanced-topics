(() => {
  const interval = setInterval(init, 1e2);
  function init() {
    if (document.readyState === 'complete') {
      clearInterval(interval);
      console.info('complete...');
    }
  }
})();
