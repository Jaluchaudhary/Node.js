
        const fs = require('fs');

       
        // Check if the file exists or not
        fs.readFile('fileName', 'utf8', (err, data) => {
            if (err) {
                //if File does not exist then file create with write reversed text to the new file
                const reversedText = reverseText(text);
                fs.writeFile(fileName, reversedText, (err) => {
                    if (err) throw err;
                    console.log(`File ${fileName} created with reversed text.`);
                });
            } else {
                // File exists, reverse the input text
                const reversedText = reverseText(text);
                //append the reversfile text in tothe end file
                fs.appendFile (fileName,reverseText, (err)=>{
                    if (err) throw err;
                
                console.log(`Reversed Text: ${reversedText}`);
                });
            }
        });