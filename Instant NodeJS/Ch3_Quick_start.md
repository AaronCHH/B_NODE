# Quick start
## Step 1 – Creating a Hello World HTTP server
Let's then create our fist Hello World server in Node.js. For that, create a fie named hello_world_http_server.js with the following content:

```js
var http = require('http');
var server = http.createServer();
server.on('request', function(req, res) {
  res.writeHead(200, {'content-type': 'text/plain'});
  res.write('Hello World!');
  res.end();
});

var port = 8080;
server.listen(port);
server.once('listening', function() {
  console.log('Hello World server listening on port %d', port);
});
```

## Step 2 – Launching the server
```js
Node hello_world_http_server.js
```

```html
http://localhost:8080
```