const express = require('express');
// Here need to involke the express

const app = express();

//get method

app.get('/',(req,res)=>{
    console.log('User hit the url :'+ req.url)
    res.status(200).send('Home Page!');
})
app.get('/about',(req,res)=>{
    console.log('User hit the url :'+ req.url)
    res.status(200).send('About Page!');
})

app.all('*',(req,res)=>{
    console.log('User hit the url :'+ req.url)
    res.status(404).send('<h1>Resource not found..!</h1>')
})

app.listen(5000, ()=>{
    console.log("server is listening to port 5000....");
})

// We have the following methods
//app.get -> It is the default thing while we hit the Url.
//app.post
//app.pull.
//app.delete.
//app.listen.
//app.put.