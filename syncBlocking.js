//synchronous waa is running the code or excutes the code step by step 

const http = require('http');

// Blocking at certain place which can leads to wait for all the other parts to finish

const server = http.createServer((req,res)=> {
    console.log('Hey new connection');
    if(req.url === '/') {
        res.end('Home page')
    }

    if(req.url === '/about') {
        // Here is just testing the code of Blocking
        // It will block all the process to execute
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end('This is an about page')
    }
})

server.listen(5000, ()=> {
    console.log("Connected succesfully..");
})