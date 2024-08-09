            const http = require('http');

            // Sample To-Do list
            let todoList = ["go to the dentist", "buy the books", "Complete lab 2"
            ];

            // this is funtion to desplay the list
            const displayTodoList = (res) => {
                res.statusCode = 200;// this is responce to status code to 200
                res.setHeader('Content-Type', 'text/plain');// this is responce to type and plain text
               
                res.end(todoList.map((item, index) => `${index + 1}) ${item}`).join('\n') + '\n');//this is send the format to todo list 
            };

            
            const port = process.argv[2]; // get the port number from the command
             // this is validate port number

            if (!port || port < 3000) {
                // if the port number is missing or less than 3000, show the error and exit
                console.error(port ? "Port number must be greater or equal to 3000" : "Missing Server Port Number");
                console.log("Usage: node todoServer.js [port number]");
                process.exit(1);
            }

                // this is create the server
            const server = http.createServer((req, res) => {

                if (req.method === 'GET' && req.url === '/') {
                    // this is handle GET the request to display to-do list
                    displayTodoList(res);
                } else if (req.method === 'PUT') {
                    // this is handle PUT the request to display to-do list

                const index = Number(req.url.slice(1)) - 1; // Extract the index from the URL
                    let body = '';
                    
                    req.on('data', chunk => body += chunk);
                    req.on('end', () => {
                    
                        if (index >= 0 && index < todoList.length) {
                            todoList[index] = body.trim(); // Update the To-Do list item

                            res.statusCode = 200; //Set the response status code to 200
                             
                            res.end('Item updated\n');//send a success message
                        } else {
                            res.statusCode = 400;
                            res.end('Invalid item index\n');
                        }
                    });
                } else {
                    // this is handle other request with the 404  not forund
                    res.statusCode = 404;
                    res.end('Not Found\n');
                }
            });

            // stsrt the server on the provided port
            server.listen(port, () => {
                console.log(`Server running on port ${port}`);
            });
