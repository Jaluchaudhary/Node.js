    // Dependencies
    const http = require('http');

    // Create a server object that will respond to any request with a string
    const server = http.createServer(function(req, res) {
      res.end('Hello World\n');
    });

    // The server will listen on port 3000
    server.listen(3000, function() {
      console.log('The server is listening on port 3000');
    });
    //statement add console header
    console.log(req.headers)
    // req.url statement
    console.log(req.url);
    // methos statement
    console.log(req.method);

    res.end('Hello World');

    // The server will listen on port 3000
    server.listen(3000, function () {
        console.log('The server is listening on port 3000');
    });
    // for loop
    for (let key in req.headers) {
        console.log(`${key}: ${req.headers[key]}`);
    }

  res.end ('Hello world');


    // The server will listen on port 3000
    server.listen(3000, function () {
    console.log('The server is listening on port 3000');
    });
    