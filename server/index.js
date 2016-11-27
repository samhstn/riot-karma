const server = require('./server.js');
const assert = require('assert');

server.start((err) => {
  assert(!err, err);

  console.log(`Server running on: ${server.info.uri}`);
});
