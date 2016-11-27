describe('counter', function() {
  beforeAll(function() {
    var component = document.createElement('counter');
    document.body.appendChild(component);
    riot.mount('counter');
  });

  afterAll(function() {
    var counter = document.querySelector('counter');
    document.body.removeChild(counter);
  });

  it('should have a link to home', function() {
    var homeLink = document.getElementsByTagName('a')[0];

    expect(homeLink.href)
      .toBe('http://localhost:9876/');
    expect(homeLink.innerHTML)
      .toBe('Home');
  });

  it('should have increment and decrement buttons', function() {
    var buttons = document.querySelectorAll('button');
    var increment = buttons[0];
    var decrement = buttons[1];

    expect(increment.textContent)
      .toBe('Increment');

    expect(decrement.textContent)
      .toBe('Decrement');
  });

  it('should have an initial count of 0', function() {
    expect(document.querySelector('div').textContent)
      .toBe('0');
  });

  it('should be able to increment', function() {
    var increment = document.querySelector('button');
    increment.click();

    expect(document.querySelector('div').textContent)
      .toBe('1');
  });
});
