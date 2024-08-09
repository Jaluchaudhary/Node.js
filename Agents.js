// Dependencies
const http = require('http'); // this line is build in http in Node.js

// Create a server object that will respond to any request with a string
const server = http.createServer(function (req, res) {
    // Log request headers, URL, and method
    console.log(req.headers);
    console.log(req.url);
    console.log(req.method);

    // Detect the user agent
    const userAgent = req.headers['user-agent'];
    let agentName = 'Undetected User Agent';

    if (userAgent.includes('Firefox')) {
        agentName = 'Firefox';
    } else if (userAgent.includes('Chrome')) {
        agentName = 'Chrome';
    } else if (userAgent.includes('curl')) {
        agentName = 'curl'
    }

    // Respond with the name of the user agent
    res.end(`User Agent: ${agentName}`);
});

// The server will listen on port 3000
server.listen(3000, function () {
    console.log('The server is listening on port 3000');
});
