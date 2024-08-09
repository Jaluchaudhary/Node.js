 const fs = require('fs');
 if (process.argv.length<3) {

    console.log ( 'Missing argument');
    process .exit(1);
 } 
 for (let i =2; i < process.argv.length; i++)
  {
     fs.mkdirSync(process.argv[i]);
  } 
  console.log(fs.readdirSync('.'));
   
  for (let i=2; i< process.argv.length; i++)
    {
        fs.rmdirSync (process.argv[i])
    }
console.log(fs.readdirSync('.'));