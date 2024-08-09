
const http = require('http');

let todoList = []; // Initialize an empty array for the To-Do list

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (todoList.length === 0) {
            //  To-Do list is empty
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Your To-Do list is empty. Well Done!!!\n');
        } else {
            // To-Do list has items
            const numberedItems = todoList.map((item, index) => `${index + 1}. ${item}`).join('\n');
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(numberedItems + '\n');
        }
    } else {
        // Method not allowed for other methods
        res.writeHead(405, { 'Allow': 'GET' });
        res.end('Method not allowed\n');
    }
});

server.listen(8080, () => {
    console.log('Server listening on port 8080');
});
