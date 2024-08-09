        const http = require('http');
        const { URL } = require('url');

        let todos = ['Go to the dentist', 'Complete the Assignment', 'Floss the Cat'];

        const server = http.createServer((req, res) => {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const { pathname, searchParams } = url;

        if (pathname === '/todos') {
            // Existing GET and POST logic here
        } else if (pathname === '/todos/delete') {
            if (req.method === 'DELETE') {
            const { index } = Object.fromEntries(searchParams);
            const todoIndex = parseInt(index, 10);
            
            if (todoIndex >= 0 && todoIndex < todos.length) {
                todos.splice(todoIndex, 1);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Todo deleted successfully' }));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Todo not found' }));
            }
            }
        } else if (pathname === '/todos/update') {
            if (req.method === 'PUT') {
            const { index } = Object.fromEntries(searchParams);
            const todoIndex = parseInt(index, 10);

            let body = '';
            req.on('data', chunk => {
                body += chunk;
            });
            req.on('end', () => {
                const { todo } = JSON.parse(body);
                
                if (todoIndex >= 0 && todoIndex < todos.length) {
                todos[todoIndex] = todo;
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Todo updated successfully' }));
                } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Todo not found' }));
                }
            });
            }
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Route not found' }));
        }
        });

        server.listen(3000, () => {
        console.log('Server running on port 3000');
        });