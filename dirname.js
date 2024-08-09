const path =require ('path');
    
    const folder = __dirname.split(path.sep);
    
    for (const folder of folders){ 
        console.log(folder);
    }
    
    const newpath = path.join(...folder);
   
    console.log(newpath); 