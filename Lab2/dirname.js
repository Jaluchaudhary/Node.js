    const path =require ('path');
    
    const folder = __dirname.split(path.sep);
    
    for (const folder of folder){ 
        console.log(folder);
    }
    
    const newpath =path.join(...folder);
    
    console.log(newpath);           