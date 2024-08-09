        // dependencies

        const fs = require('fs');
        const path = require('path');

        const sourceFile = path.join(__dirname, 'myText.txt');
        const destinationFile = path.join(__dirname, 'copytext1.txt');

        // this is a readable stream from myText.txt
        const readerStream = fs.createReadStream(sourceFile);

        // this is a writable stream to copytext1.txt
        const writerStream = fs.createWriteStream(destinationFile);

        // Define error event handler on the readable stream
        readerStream.on('error', (err) => {
            console.error('File not found');
        });

        // Pipe the readable stream to the writable stream
        
        readerStream.pipe(writerStream);

        console.log(`Successfully copied contents from ${sourceFile} to ${destinationFile}`);
