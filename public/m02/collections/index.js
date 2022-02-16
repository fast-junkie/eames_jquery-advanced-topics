(() => {
  const myArray = [1, 2, 3, 3, 4, 4, 5];
  const myArray2 = [6, 7, 8];

  if ($.inArray(4, myArray) !== -1) console.debug('4 is in the myArray');
  if ($.inArray(44, myArray) !== -1) console.debug('44 is in the myArray');

  $.uniqueSort(myArray);
  console.debug('myArray: unique', myArray);

  $.merge(myArray, myArray2);
  console.debug('myArray: merge', myArray);

  const newArray = $.map(myArray, (item) => item * 5);
  console.debug('newArray: map', newArray);

  const greppedArray = $.grep(myArray, (item) => item % 2 === 0);
  console.debug('greppedArray: grep', greppedArray);

  console.debug('makeArray: div', $.makeArray($('div')));
})();
