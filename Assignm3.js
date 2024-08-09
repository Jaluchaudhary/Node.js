
const http = require('http');
const url = require('url');

let todoList = ['Go to the dentist', 'Complete the Assignment', 'Floss the Cat'];



const server = http.createServer((req, res) => {
    const parsedUrl = new URL(`http://localhost:${PORT}${req.url}`);
    const { pathname, searchParams } = parsedUrl;
    const method = req.method;

    if (method === 'GET' && pathname === '/todos') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(todoList));

    } else if (method === 'PUT' && pathname === '/todos') {
        const index = parseInt(searchParams.get('index'), 10);
        if (!isNaN(index) && index >= 0 && index < todoList.length) {
            const newData = 'Updated Task'; // Replace with actual updated data
            todoList[index] = newData;
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Updated task at index ${index}`);
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Invalid index parameter');
        }
        
    } else if (method === 'DELETE' && pathname === '/todos') {
        const index = parseInt(searchParams.get('index'), 10);
        if (!isNaN(index) && index >= 0 && index < todoList.length) {
            todoList.splice(index, 1);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Deleted task at index ${index}`);
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Invalid index parameter');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route not found');
    }
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
