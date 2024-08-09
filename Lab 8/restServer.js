        const fs = require('fs').promises;

        // Load list from JSON file
        async function loadList(filename) {
            try {
                const data = await fs.readFile(filename, 'utf-8');
                return JSON.parse(data);
            } catch (err) {
                console.error('Error loading list:', err);
                return [];
            }
        }

        // Save list to JSON file
        async function saveList(filename, list) {
            try {
                await fs.writeFile(filename, JSON.stringify(list, null, 2));
            } catch (err) {
                console.error('Error saving list:', err);
            }
        }

        const http = require('http');
        const url = require('url');
        const PORT = 8081;

        // DELETE handler
        async function deleteHandler(filename, index, callback) {
            const list = await loadList(filename);
            if (index < 0 || index >= list.length) {
                callback(404, 'NOT FOUND');
            } else {
                list.splice(index, 1);
                await saveList(filename, list);
                callback(200, 'Item deleted successfully');
            }
        }

        // PUT handler
        async function putHandler(filename, index, updates, callback) {
            const list = await loadList(filename);
            if (index < 0 || index >= list.length) {
                callback(404, 'NOT FOUND');
            } else {
                const item = list[index];
                for (let key in updates) {
                    if (item.hasOwnProperty(key)) {
                        item[key] = updates[key];
                    }
                }
                await saveList(filename, list);
                callback(200, 'Item updated successfully');
            }
        }

        // Create server
        const server = http.createServer((req, res) => {
            const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
            const { pathname, searchParams } = parsedUrl;
            const method = req.method;

            if (method === 'DELETE' && (pathname.startsWith('/todo/') || pathname.startsWith('/shop/'))) {
                const parts = pathname.split('/');
                const index = parseInt(parts[2], 10);
                const filename = pathname.startsWith('/todo') ? 'todo.json' : 'shop.json';

                deleteHandler(filename, index, (statusCode, message) => {
                    res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
                    res.end(message);
                });

            } else if (method === 'PUT' && (pathname.startsWith('/todo/') || pathname.startsWith('/shop/'))) {
                const parts = pathname.split('/');
                const index = parseInt(parts[2], 10);
                const filename = pathname.startsWith('/todo') ? 'todo.json' : 'shop.json';

                const updates = {};
                for (let [key, value] of searchParams) {
                    updates[key] = value;
                }

                putHandler(filename, index, updates, (statusCode, message) => {
                    res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
                    res.end(message);
                });

            } else if (method === 'GET' && pathname === '/todos') {
                // Handle GET request (example for '/todos')
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(todoList));
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Route not found');
            }
        });

        server.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}/`);
        });
