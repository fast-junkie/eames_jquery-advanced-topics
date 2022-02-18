(() => {
  const bullet = {
    shoot() {
      bullet.shot = $.Deferred();
      const $b = $('#bullet');
      $b.css({ left: '110px' }).show();
      $b.animate({ left: '580px' }, 2e3, bullet.shotFinished);
      return bullet.shot.promise();
    },
    shotFinished() {
      $('#bullet').hide();
      bullet.shot.resolve('red');
    },
  };
  const redGuy = {
    shootBlue() {
      return bullet.shoot();
    },
  };
  const blueGuy = {
    die() {
      $('#blueGuy').fadeOut(2e3);
    },
    shotFired(shot) {
      shot.done(blueGuy.die);
      if (shot.reject) shot.reject();
    },
  };

  $('#redGuy').on('click', startCombat);
  $('#button1').on('click', () => { bullet.shot.done((winner) => { console.log(`The winner was ${winner}`); }); });

  function startCombat() {
    const shot = redGuy.shootBlue();
    blueGuy.shotFired(shot);
    shot.always(() => { console.debug('battle is complete'); });
    shot.done((winner) => { console.debug(`battle resolved. Winner: ${winner}`); });
    shot.fail(() => { console.debug('battle rejected'); });
  }
})();
