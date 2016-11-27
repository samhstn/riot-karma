const tape = require('tape');
const server = require('../../server/server.js');

[
  '/',
  '/todo',
  '/counter',
  '/riot+compiler.min.js',
  '/tags/home.tag'
].forEach((url) => {
  tape(url + ' :: GET', (t) => {
    server.inject({ method: 'get', url })
      .then((res) => {
        t.equal(res.statusCode, 200);
        t.end();
      })
  });
});

