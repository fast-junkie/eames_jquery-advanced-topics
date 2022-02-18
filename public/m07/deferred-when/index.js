(() => {
  const $div1 = $('#div1');
  const $div2 = $('#div2');
  const $time1 = $('#div1time');
  const $time2 = $('#div2time');

  $('#button1').on('click', showDivsResolve);
  $('#button2').on('click', showDivsReject);

  function showDivsResolve() {
    $.log('Resolve was clicked...');
    const promise1 = $div1.fadeIn(parseInt($time1.val(), 10)).promise();
    const promise2 = $div2.fadeIn(parseInt($time2.val(), 10)).promise();
    $.when(promise1, promise2)
      .done(() => { $.log('done'); $div1.hide(); $div2.hide(); });
  }
  function showDivsReject() {
    $.log('Reject was clicked...');
    const promise1 = $div1.fadeIn(parseInt($time1.val(), 10)).promise();
    const promise2 = $div2.fadeIn(parseInt($time2.val(), 10)).promise();
    const def = $.Deferred();

    $.when(promise1, promise2, def)
      .then(
        () => { $.log('done'); $div1.hide(); $div2.hide(); },
        () => { $.log('reject'); $div1.hide(); $div2.hide(); },
      );

    setTimeout(def.reject, 500);
  }
})();
