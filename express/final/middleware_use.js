//The  usability of middleware as which by using the method of use in express to get the created middleware access.

const express = require('express');
const app = express();
const morgan = require('morgan');

//calling/importing the middleware

//const logger = require('./logger')
//const authorize = require('./exampAuthorize');
//const exampAuthorize = require('./exampAuthorize');
//app.use(logger, exampAuthorize);

//app.use(logger)
//If we specify the path with the use method then -> the middleware will only reflects for the respective path of access.
//in the below used api as path along with middleware -> The middleware can be applied to the specific to the path which starts with api.

//app.use('/api',logger)
//This is the Thirdparty middleware
app.use(morgan('tiny'))

app.get('/',(req, res)=> {
    res.send('Welcome to Home Page!');
})

app.get('/about',(req, res)=>{
    res.send('Welcome to about page!');
})

app.get('/api/products',(req, res)=>{
    res.send('Welcome to Product Page!');
})

app.get('/api/items',(req, res)=>{
    //console.log(req.user);
    res.send('Welcome to items page!');
})


app.listen(5000,()=> {
    console.log('listening on port 5000...')
})