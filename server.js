    const http = require('http');

    // Object to store the count of requests for each user agent
    const userAgentCounts = {
      Firefox: 0,
      Chrome: 0,
      curl: 0,
      Other: 0
    };

    // Function to detect user agent
    function detectUserAgent(userAgent) {
      if (userAgent.includes('Firefox')) {
        return 'Firefox';
      } else if (userAgent.includes('Chrome')) {
        return 'Chrome';
      } else if (userAgent.includes('curl')) {
        return 'curl';
      } else {
        return 'Other';
      }
    }

    // Function to find the preferred user agent
    function findPreferredUserAgent() {
      let maxCount = 0;
      let preferredAgent = 'Undetected User Agent';

      for (const [agent, count] of Object.entries(userAgentCounts)) {
        if (count > maxCount) {
          maxCount = count;
          preferredAgent = agent;
        }
      }

      return preferredAgent;
    }

    const server = http.createServer((req, res) => {
      const userAgent = req.headers['user-agent'];
      const detectedAgent = detectUserAgent(userAgent);

      userAgentCounts[detectedAgent]++;
      const preferredAgent = findPreferredUserAgent();

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`${detectedAgent} - ${userAgentCounts[detectedAgent]} requests received`);

      console.log(`Preferred User Agent so far: ${preferredAgent}`);
    });

    const PORT = 3000;
    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
