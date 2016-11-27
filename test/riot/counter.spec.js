describe('counter', () => {
  beforeAll(() => {
    const component = document.createElement('counter');
    document.body.appendChild(component);
    riot.mount('counter');
  });

  afterAll(() => {
    const counter = document.querySelector('counter');
    document.body.removeChild(counter);
  });

  it('should have a link to home', () => {
    const homeLink = document.getElementsByTagName('a')[0];

    expect(homeLink.href)
      .toBe('http://localhost:9876/');
    expect(homeLink.innerHTML)
      .toBe('Home');
  });

  it('should have increment and decrement buttons', () => {
    const buttons = document.querySelectorAll('button');
    const increment = buttons[0];
    const decrement = buttons[1];

    expect(increment.textContent)
      .toBe('Increment');

    expect(decrement.textContent)
      .toBe('Decrement');
  });

  it('should have an initial count of 0', () => {
    expect(document.querySelector('div').textContent)
      .toBe('0');
  });

  it('should be able to increment', () => {
    const increment = document.querySelector('button');
    increment.click();

    expect(document.querySelector('div').textContent)
      .toBe('1');
  });
});
