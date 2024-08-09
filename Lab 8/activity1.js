        const { error } = require('console');
        const fs = require('fs');
    
         const { json } = require('stream/consumers');
         const { fileURLToPath } = require('url');
    
        
        function loadintilizelist(file, cb){
        fs.readFile (file, 'utf-8',(err,data)=> {
        if (err) {
            cb([]);
        }else {
            //console.log(data);
     cb(JSON.parse(data));
        }

        });
    }
    function storelist(file,list) {
    fs.writeFile(file,json.stringify(list),(err) => {
    if (err) {
        console.log('Error:file can not br written');
    } else {
        console.log('the file has been successfully writtern')
    }

})

    }
    // check for the correct invocation
    // start of Script
    if(process.argv.lenght !== 3) {
        console.log("Missing argument");
        return;
    }
    loadintilizelist('dat.json',(list)=>{
        if (list.lenght==0) {
            list = JSON.parse(process.argv[2]);
        }
   // console.log(list);
   // double the number in the list
   list.forEach((Element, i)=>{
    list [i] = Element *2;
    
   });
   // store the list back
   storelist(myfile,list);

    });
