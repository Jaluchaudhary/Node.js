        // dependencies
        const http = require('http');
        const fs = require('fs');
        const path = require('path');

        const server = http.createServer((req, res) => {
            console.log('Request received:', req.method, req.url);

            // Read the contents of the current working directory asynchronously
            fs.readdir(process.cwd(), (err, files) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end(files.join(','));
                }
            });
        });

        const port = 3000;
        server.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });