const http = require('http');
const { URL } = require('url');

const server = http.createServer((req, res) => {
  // Parse the URL using WHATWG URL API
  const url = new URL(req.url, `http://${req.headers.host}`);
  
  // Use destructuring assignment to extract the pathname
  const { pathname } = url;

  // Rest of your server logic here, using 'pathname' instead of 'req.url'
  // For example:
  if (pathname === '/todos') {
    // Handle /todos route
  } else if (pathname.startsWith('/todos/')) {
    // Handle individual todo items
  } else {
    // Handle other routes or 404
  }

  // ... rest of your server code
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});