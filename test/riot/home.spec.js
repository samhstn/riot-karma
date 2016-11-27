describe('home', function () {
  beforeAll(function () {
    var component = document.createElement('home');
    document.body.appendChild(component);
    riot.mount('home');
  });

  afterAll(function () {
    var home = document.getElementsByTagName('home')[0];
    document.body.removeChild(home);
  });

  it('has a h1 tag containing Hello Home', function () {
    expect(document.getElementsByTagName('h1')[0].innerHTML)
      .toBe('Hello Home');
  });

  it('has an a tag linking to counter', function () {
    var counterTag = document.getElementsByTagName('a')[0];

    expect(counterTag.href)
      .toBe('http://localhost:9876/counter');

    expect(counterTag.innerHTML)
      .toBe('Counter');
  });

  it('has an a tag linking to todo', function () {
    var counterTag = document.getElementsByTagName('a')[1];

    expect(counterTag.href)
      .toBe('http://localhost:9876/todo');

    expect(counterTag.innerHTML)
      .toBe('Todo');
  });
});
