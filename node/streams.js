//Streams are the advanced thing in node js which mainly focus on
//it comes into note if there are continues sorce of big file 
//there are types of streams
// Writable
// Readable
// duplex
// Transform 

const {createReadStream} = require('fs');

//we can also set the bytes with high watermark and also we can get the data with letters by encoding
//default 64kb
//last buffer = reminder
//highWaterMark = control size
//const stream = createReadStream('./content/bog.txt',{highWaterMark : 9000 ,encoding : 'utf8'})

const stream = createReadStream('./content/bog.txt');

stream.on('data',(result)=> {
    console.log(result);
})