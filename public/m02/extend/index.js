(() => {
  _output('Begin .extend() tests...');

  const animal = {
    actions: {
      eat() { _output('I, the animal, am eating...'); },
      sit() { _output('I, the animal, am sitting...'); },
    },
  };
  const dog = {
    actions: {
      bark() { _output('I, the dog, am barking...'); },
      dig() { _output('I, the dog, am digging...'); },
    },
  };

  dog.actions.bark();
  dog.actions.dig();

  $.extend(true, dog, animal);

  dog.actions.eat();
  dog.actions.sit();

  console.debug(dog.actions.bark);

  function _output(msg) {
    const $div = $('<div/>').append(msg);
    $('#output').append($div);
  }
})();
