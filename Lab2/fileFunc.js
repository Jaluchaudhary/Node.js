
        const path = require('path');

            const folderPath = path.resolve(__dirname);
           
            const folders = fs.readdirSync(folderPath).filter(item => fs.statSync(path.join(folderPath, item)).isDirectory());

        const writeFilePath = path.join(folderPath, 'fileWrite.txt');
        
        fs.writeFileSync(writeFilePath, ''); 

                folders.forEach(folder => {
                    fs.writeFileSync(writeFilePath, folder + '\n', { flag: 'a' });
                });

        const appendFilePath = path.join(folderPath, 'fileAppend.txt');
       
        fs.writeFileSync(appendFilePath, ''); 
        
        folders.forEach(folder => {
         
            fs.appendFileSync(appendFilePath, folder + '\n');
        });

        const fileData = fs.readFileSync(appendFilePath, 'utf-8');
        
        const folderNames = fileData.trim().split('\n');

        const fullPathPath = folderNames.join(path.sep);

        console.log(fullPath);
