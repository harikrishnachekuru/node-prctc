//reading a file with encoding
//pipe method of radstream used to tranfer/convert reading to writing content.

var http = require('http');

var fs = require('fs');

http.createServer(function (req,res) {
    //we can do it in redfilesync/ createreadstream 
    // const text = fs.readFileSync('./content/bog.txt', 'utf8');
    // res.end(text);
    const fileStream = fs.createReadStream('./content/bog.txt','utf8');
    fileStream.on('open',()=> {
        fileStream.pipe(res);
    })
    fileStream.on("error",(err)=>{
        res.end(err);
    })
})
.listen(5000)