            //dependency
            const fs = require('fs');

            //check script invocation
            if (process.argv.length !== 3) {
                console.error('Usage: node syncRead2.js <filename>');
                process.exit(1);
            }

            // function called vowelCount
            function vowelCount(text) {
                
                //Count the number of vowels in the text
                let vowelCount = 0;
                for (let char of text) {
                    if ('aeiouAEIOU'.includes(char)) {
                        vowelCount++;
                    }
                }
                //Print to the terminal the number of vowels
                console.log('Number of vowels:', vowelCount);
            }

            //read the content of the file given as an argument
            const fileName = process.argv[2];
            const fileContent = fs.readFileSync(fileName, 'utf8');

            //Call the vowelCount function
            vowelCount(fileContent);
