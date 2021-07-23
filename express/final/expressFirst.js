const http = require('http')

// get the files 
const {readFileSync} = require('fs');

const homePage = readFileSync('./index.html');

const server = http.createServer((req,res)=>{
    // console.log('link you are hitting')
    // res.end('Home Page');

    // we can writeHead the content directly as followed with status and type 
    // In the below content type if we give html it will get data as html and if give as plain then data will treat as text.
    //console.log(req.method)
    //console.log(req.url);
    
    // Everytime we can't do run the html content in the methods instead of doing we can directly invoke a file as and passes in the method.
    

    const url = req.url;
    if(url === '/') {
        res.writeHead(200, {'Content-Type':"text/html"});
        res.write(homePage);
        res.end();
    }else if(url === '/about') {
        res.writeHead(200, {'Content-Type':"text/html"});
        res.write('<h1>This is the History of user</h1>');
        res.end();
    }else {
        res.writeHead(404, {'Content-Type':"text/html"});
        res.write('<h1>Ooops...!</h1> <h2>This is the wrong page you are looking...</h2>');
        res.end();
    }
    
})

server.listen(5000);