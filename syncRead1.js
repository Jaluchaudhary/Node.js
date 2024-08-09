            // dependency
            const fs = require('fs');

            //check script invocation
            if (process.argv.length !== 3) {
                console.error('Usage: node syncRead1.js <filename>');
                process.exit(1);
            }

            //read the content of the file given as an argument on the command 
            const fileName = process.argv[2];
            const fileContent = fs.readFileSync(fileName, 'utf8');

            //Count the number of vowels in the text
            let vowelCount = 0;
            for (let char of fileContent) {
                if ('aeiouAEIOU'.includes(char)) {
                    vowelCount++;
                }
            }

            //Print to the terminal 
            console.log('Number of vowels:', vowelCount);
