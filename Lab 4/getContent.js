// dependencies

        const http = require('http');
        const fs = require('fs');
        const path = require('path');

        const server = http.createServer((req, res) => {
            console.log('Request received:', req.method, req.url);

            // Define the file path
            const filePath = path.join(__dirname, 'myText.txt');

            // this a readable stream for myText.txt
            const readerStream = fs.createReadStream(filePath);

            // Handle errors on the readable stream
            readerStream.on('error', (err) => {
                console.error('Error reading the file:', err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading the file');
            });
            
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            // Pipe the contents of myText.txt to the response
            readerStream.pipe(res);
        });

        const port = 3000;
        server.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
