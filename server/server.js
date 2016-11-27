const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const assert = require('assert');
const path = require('path');
const fs = require('fs');

const port = process.env.PORT || 3333;

const server = new Hapi.Server();

server.connection({ port });

server.register([ Inert, Vision ], (err) => {
  assert(!err, err);

  server.views({
    engines: {
      tag: {
        compile: (src, options) => (context) => {
          const layoutPath = path.join(__dirname, '..', 'public', 'layout.html');
          const layout = fs.readFileSync(layoutPath, 'utf8');

          const view = options.filename.slice(options.filename.lastIndexOf('/') + 1);
          const component = view.slice(0, view.lastIndexOf('.'));

          const templated = layout
            .replace(/\$component\$/g, component)
            .replace(/\$opts\$/, JSON.stringify(context));

          return templated;
        }
      }
    },
    relativeTo: __dirname,
    path: '../public/tags'
  });

  server.route([
    {
      method: 'get',
      path: '/',
      handler: (request, reply) => reply.view('home')
    },
    {
      method: 'get',
      path: '/todo',
      handler: (request, reply) => {
        const todos = [
          { todo: 'first', done: true},
          { todo: 'second' },
          { todo: 'third' }
        ];

        opts = { todos };

        reply.view('todo', opts)
      }
    },
    {
      method: 'get',
      path: '/counter',
      handler: (request, reply) => reply.view('counter')
    },
    {
      method: 'get',
      path: '/riot+compiler.min.js',
      handler: (request, reply) => reply.file('node_modules/riot/riot+compiler.min.js')
    },
    {
      method: 'get',
      path: '/tags/{param*}',
      handler: { directory: { path: 'tags' } }
    }
  ]);
});

module.exports = server;
