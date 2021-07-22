//we can directly use on method for assigning/ digging the value
//Directly have an event for server to create/request -> which leads to events EventEmitter

//using EventEmitter

const http = require('http');

const server = http.createServer()
//emits request event
//listen for it/ respond to it

server.on('request',(req,res)=>{
    res.end("Welcome")
})

server.listen(5000);