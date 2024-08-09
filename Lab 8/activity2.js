        // add dependencies
        const { constants } = require('buffer');
        const fs = require ('fs');
        const http = require('http');
        const {URL} =require('url');
        // helper function
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
        // set up the folder
        let todofolder = './todo';
        let shopfolder ='./shop';

        fs.readdir(todofolder,(err,content)=> {
            if (err) {         //the folder dose not exist
                fs.mkdir(todofolder, (err) => {
                    if (err) throw err;
        });
            }
        });
        fs.readdir(shopfolder,(err,content)=> {
            if (err) {//the folder dose not exist
                fs.mkdir(shopfolder, (err) => {
                    if (err) throw err;
        });
            }
        });

        // JSON file variable
        const todofile = './todo/todo.jason';
        const shopfile = './shop/shop.jason';
        // server code
        const server = http.createServer((req,res)=> {
        // parsing the URL using the WHATWG API
        const baseURL = 'HTTP://' + req.headers.host+ '/';
        const {pathname,sesrchParams} = new URL(req.url,baseURL);

        // pathname/shop/or shop--/todo/or /todo
        // for delete and put
        const endpoint =pathname.split('/');
        const path = endpoint[1];
        const index =parseInt(endpoint[2],10);

        // convert the serchparams
        let enteries = searchParams.enteries();
        const query = Object.fromEntries(enteries);

        //request method
        const method = req.method;

            res.end('Done');
        });
        let port = 3032;
        server.listen(port,()=> {
            console.log(`Server listning on port ${port}`);
        });