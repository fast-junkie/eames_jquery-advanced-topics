(() => {
  const deferred = $.Deferred();
  deferred.done(() => { $.log('resolved'); });
  deferred.fail(() => { $.log('rejected'); });
  deferred.always(() => { $.log('always'); });

  $('#btnResolve').on('click', () => { deferred.resolve(); });
  $('#btnReject').on('click', () => { deferred.reject(); });
  $('#btnReport').on('click', () => { $.log(deferred.state()); });
})();
