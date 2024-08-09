        const http = require('http');
        const url = require('url');

        // this is a basic HTTP server
        const server = http.createServer((req, res) => {
            // Parse the request URL
            const parsedUrl = url.parse(req.url, true);

            // Destructure the parsed URL
            const { hostname, pathname } = parsedUrl;
            const port = 8081; 
            const method = req.method;

            //This is an object with the extracted data
            const data = {
                hostname:'localhost',
                pathname :'main/test/',
                port :'8081',
                method :'GET'
                
            };

            // If there is a query string, add it to the data object
            if (parsedUrl.query) {
                data.query = parsedUrl.query;
            }

            // Stringify the data object to JSON format
            const jsonData = JSON.stringify(data);

            // Set the response headers
            res.writeHead(200, {'Content-Type': 'application/json'});

            // Send the JSON data as the response
            res.end(jsonData);
        });

        // the server listen on port 8081
        const PORT = 8081;
        server.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}/`);
        });
