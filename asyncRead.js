
                // dependency
                const fs = require('fs');

                // Check script invocation
                if (process.argv.length < 3) {
                    console.error('Error: Please provide a file name as a command line argument.');
                    process.exit(1);
                }

                // Convert vowelCount to a function expression using 
                const countVowels = (text) => {
                    const vowels = ['a', 'e', 'i', 'o', 'u'];
                    let vowelCount = 0;
                    for (let char of text.toLowerCase()) {
                        if (vowels.includes(char)) {
                            vowelCount++;
                        }
                    }
                    console.log(`Number of vowels: ${vowelCount}`);
                };

                // Shift to asynchronous file API
                const fileName = process.argv[2];
                
                fs.readFile(fileName, 'utf8', (err, fileContent) => {
                    if (err) {
                        console.error(`Error: Unable to read file ${fileName}`);
                        process.exit(1);
                    }
                    //function to count the vowels
                    countVowels(fileContent);
                });
