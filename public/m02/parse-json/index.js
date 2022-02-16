(() => {
  const json = '{"fname" : "Fast", "lname" : "Junkie", "age" : 56}';
  // const jsObject = $.parseJSON(json);
  const jsObject = JSON.parse(json);
  const output = `${jsObject.fname}<br />${jsObject.lname}<br />${jsObject.age}`;
  $('#output').append(output);
})();
