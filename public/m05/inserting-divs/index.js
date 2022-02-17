(() => {
  const arrLen = 1000;
  const arr = [arrLen];
  for (let i = 0; i < arrLen; i += 1) {
    arr[i] = i;
  }

  const methods = [
    { name: 'Simple Append', run: true },
    { name: 'Inserting Once Using String', run: true },
    { name: 'Using Array Join', run: true },
    { name: 'Using Array Join And For Loop', run: true },
    { name: 'Inserting With Wrapping Element', run: true },
  ];

  if (methods[0].run) {
    console.time(methods[0].name);
    const parent = $('#parent');
    $.each(arr, function _iterator() {
      parent.append(`<div>${this}</div>`);
    });
    console.timeEnd(methods[0].name);
  }

  if (methods[1].run) {
    console.time(methods[1].name);
    let appendString = '';
    $.each(arr, function _iterator() {
      appendString += `<div>${this}</div>`;
    });
    $('#parent').append(appendString);
    console.timeEnd(methods[1].name);
  }

  if (methods[2].run) {
    console.time(methods[2].name);
    const appendArray = [];
    let i = 0;
    $.each(arr, function _iterator() {
      appendArray[i += 1] = '<div>';
      appendArray[i += 1] = this;
      appendArray[i += 1] = '</div>';
    });
    $('#parent').append(appendArray.join(''));
    console.timeEnd(methods[2].name);
  }

  if (methods[3].run) {
    console.time(methods[3].name);
    const appendArray = [];
    let i = 0;
    for (let j = 0; j < arrLen; j += 1) {
      appendArray[i += 1] = '<div>';
      appendArray[i += 1] = arr[j];
      appendArray[i += 1] = '</div>';
    }
    $('#parent').append(appendArray.join(''));
    console.timeEnd(methods[3].name);
  }

  if (methods[4].run) {
    console.time(methods[4].name);
    let appendString = '';
    $.each(arr, function _iterator() {
      appendString += `<div>${this}</div>`;
    });
    $('#parent').append(`<div>${appendString}</div>`);
    console.timeEnd(methods[4].name);
  }
})();
