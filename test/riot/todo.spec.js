const getDiv = (innerHtml) => {
  const divs = document.getElementsByTagName('div');
  return [].filter.call(divs, (div) => {
    return div.innerHTML === innerHtml;
  })[0];
}

describe('todo', () => {
  beforeAll(() => {
    const component = document.createElement('todo');
    document.body.appendChild(component);
    riot.mount('todo', {
      todos: [
        { todo: 'first', done: true },
        { todo: 'second' },
        { todo: 'third' }
      ]
    });
  });

  afterAll(() => {
    const todo = document.getElementsByTagName('todo');
    document.body.removeChild(todo);
  });

  it('should have a link to home', () => {
    const homeLink = document.getElementsByTagName('a')[0];

    expect(homeLink.href)
      .toBe('http://localhost:9876/');
    expect(homeLink.innerHTML)
      .toBe('Home');
  });

  it('should have correct first todo', () => {
    const first = getDiv('first');

    expect(first.innerHTML)
      .toBe('first');

    expect(first.classList.contains('completed'))
      .toBe(true);
  });

  it('should have correct second and third todos', () => {
    const second = getDiv('second');
    const third = getDiv('third');

    expect(second.innerHTML)
      .toBe('second');

    expect(third.innerHTML)
      .toBe('third');

    expect(second.classList.contains('completed'))
      .toBe(false);

    expect(third.classList.contains('completed'))
      .toBe(false);
  });


  it('should be able to complete a todo', () => {
    const secondUnclicked = getDiv('second');

    secondUnclicked.click();

    const secondClicked = getDiv('second');

    expect(secondUnclicked.classList.length)
      .toBe(0);

    expect(secondClicked.classList[0])
      .toBe('completed');
  });

  it('should have an empty input box', () => {
    const input = document.querySelector('input');
    expect(input.value).toBe('');
  });

  it('should be able to add a todo', () => {
    const input = document.querySelector('input');
    input.value = 'new todo';

    document.querySelector('button').click();

    const newTodo = getDiv('new todo');

    expect(newTodo.innerHTML).toBe('new todo');

    const finalInput = document.querySelector('input');
    expect(finalInput.value).toBe('');
  });
});
