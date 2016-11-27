var getDiv = function (innerHtml) {
  var divs = document.getElementsByTagName('div');
  return [].filter.call(divs, function (div) {
    return div.innerHTML === innerHtml;
  })[0];
}

describe('todo', function () {
  beforeAll(function () {
    var component = document.createElement('todo');
    document.body.appendChild(component);
    riot.mount('todo', {
      todos: [
        { todo: 'first', done: true },
        { todo: 'second' },
        { todo: 'third' }
      ]
    });
  });

  afterAll(function () {
    var todo = document.getElementsByTagName('todo');
    document.body.removeChild(todo);
  });

  it('should have a link to home', function () {
    var homeLink = document.getElementsByTagName('a')[0];

    expect(homeLink.href)
      .toBe('http://localhost:9876/');
    expect(homeLink.innerHTML)
      .toBe('Home');
  });

  it('should have correct first todo', function () {
    var first = getDiv('first');

    expect(first.innerHTML)
      .toBe('first');

    expect(first.classList.contains('completed'))
      .toBe(true);
  });

  it('should have correct second and third todos', function () {
    var second = getDiv('second');
    var third = getDiv('third');

    expect(second.innerHTML)
      .toBe('second');

    expect(third.innerHTML)
      .toBe('third');

    expect(second.classList.contains('completed'))
      .toBe(false);

    expect(third.classList.contains('completed'))
      .toBe(false);
  });


  it('should be able to complete a todo', function () {
    var secondUnclicked = getDiv('second');

    secondUnclicked.click();

    var secondClicked = getDiv('second');

    expect(secondUnclicked.classList.length)
      .toBe(0);

    expect(secondClicked.classList[0])
      .toBe('completed');
  });

  it('should have an empty input box', function () {
    var input = document.querySelector('input');
    expect(input.value).toBe('');
  });

  it('should be able to add a todo', function () {
    var input = document.querySelector('input');
    input.value = 'new todo';

    document.querySelector('button').click();

    var newTodo = getDiv('new todo');

    expect(newTodo.innerHTML).toBe('new todo');

    var finalInput = document.querySelector('input');
    expect(finalInput.value).toBe('');
  });
});
