const http = require('http');
const { URL } = require('url');

// Create a basic HTTP server
const server = http.createServer((req, res) => {
    // Parse the request URL using WHATWG URL API
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

    // Destructuring assignment to extract pathname
    const { pathname } = parsedUrl;

    // Create an object with the extracted data
    const data = {
        pathname,
        hostname: parsedUrl.hostname,
        port: parsedUrl.port || '3000', // Provide default port if not specified
        method: req.method
    };

    // If there are query parameters, add them to the data object
    if (parsedUrl.searchParams.size > 0) {
        const query = {};
        parsedUrl.searchParams.forEach((value, key) => {
            query[key] = value;
        });
        data.query = query;
    }

    // Stringify the data object to JSON format
    const jsonData = JSON.stringify(data, null, 2); // Added indentation for readability

    // Set the response headers to indicate JSON content
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Send the JSON data as the response
    res.end(jsonData);
});

// Make the server listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});