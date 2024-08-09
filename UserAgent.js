        // Dependencies
        const http = require('http');

        // Counters for user agents
        const userAgentCounts = {
            Firefox:0,
            Chrome: 0, 
            curl: 0,
            Undetected: 0 /* this object maintain a count of request from the different 
            users agent and represent the count of request recived from each uses agent*/

        };

        // Function to find the user agent with the maximum number of requests
        function getMaxUserAgent() {
            let maxCount = 0;
            let maxUserAgent = 'Undetected';

            for (let userAgent in userAgentCounts) {
                if (userAgentCounts[userAgent] > maxCount) {
                    maxCount = userAgentCounts[userAgent];
                    maxUserAgent = userAgent;
                }
            }

            return maxUserAgent;
        }

        // Create a server object that will respond to any request with a string
        const server = http.createServer(function (req, res) {
            // Log request headers, URL, and method
            console.log(req.headers);
            console.log(req.url);
            console.log(req.method);

            // Detect the user agent
            const userAgent = req.headers['user-agent'];
            let agentName = 'Undetected';

            if (userAgent.includes('Firefox')) {
                agentName = 'Firefox';
            } else if (userAgent.includes('Chrome')) {
                agentName = 'Chrome';
            } else if (userAgent.includes('curl')) {
                agentName = 'curl';
            }

            // Update the counter for the detected user agent
            userAgentCounts[agentName]++;
            const count = userAgentCounts[agentName];

            // Respond with the name of the user agent and the number of requests
            res.end(`User Agent: ${agentName}, Requests: ${count}`);

            // Print the user agent with the maximum requests to the terminal
            const maxUserAgent = getMaxUserAgent();
            console.log(`Preferred User Agent: ${maxUserAgent}`);
        });

        // The server will listen on port 3000
        server.listen(3000, function () {
            console.log('The server is listening on port 3000');
        });
