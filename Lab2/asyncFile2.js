    const fs = require('fs');
    const path = require('path');


    // Check if the folder exists
    fs.readdir(folderName, (err, files) => {
        if (err) {
            // Folder does not exist then create the folder
            fs.mkdir(folderName, (err) => {
                if (err) throw err;
                console.log("Folder created.");
            });
        } else {
            // Folder exists, print the full path to the folder
            const fullPath = path.resolve(folderName);
            console.log(`Folder already exists at: ${fullPath}`);
        }
    });