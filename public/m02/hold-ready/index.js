let loaded = false;
$.holdReady(true);

$.getScript('plugin.js');

function printPluginReady() {
  if (loaded) {
    $('#output').append('<br />Plugin loaded');
  } else {
    $('#output').append('<br />Plugin not loaded');
  }
}

jQuery(() => {
  $('#output').append('jQuery ready event firing');
  printPluginReady();
  $('#output').on('click', printPluginReady);
});
