//event loop is to 

// csllbsck will be done at last stage
//call back passed 0 but it is considered the value and executes at the end.

console.log("first");

setTimeout(()=> {
    console.log('second');
},0)

console.log('Third');
//^ above completed task as it executed.

// Another example of event Loop

setInterval(()=>{
console.log("Hey Buddy")
},1000);  // Here it excutes for every 1 sec untill we kill the process 

console.log("This is local body ");

// process stays alive unless kill the process cntrl + C , unexpected errot


// Another server connective example to know the Async process as listen which listens the process 

const http = require('http');

const server = http.createServer((req,res)=> {
    console.log('request event loop');
    res.end("Hello World")
})

server.listen(5000,()=>{    // Here it is just fat arrow function for server connectivity status it will not be campered with the above
    console.log('Server listening on port 5000')
})

// whenever refresh it will fetch the call.
