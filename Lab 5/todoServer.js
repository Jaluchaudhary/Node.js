        // create the http server
        const http = require('http');
 
        // the command make a arguments
        const port = process.argv[2];

        // this is a provide a valided number ( greater or equel to 3000)
        if (!port || port < 3000) {
            // this is port number is invalid or missing, print an error message
            console.error(port ? "Port number must be greater or equal to 3000" : "Missing Server Port Number");
            // this is usage instruction
            console.log("Usage: node todoServer.js [port number]");
            process.exit(1);
        }
       // this is creat the server response to Hello Mason
        const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello, Mason!\n');
        });

        //Start the server and have it listen on the provided port
        server.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });

