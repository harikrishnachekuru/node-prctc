//Middleware in express helps to get data as req and send the response.
//For using middleware in a function we definitely needs to mention the next parameter to move forward os next steps.

const express = require('express');

const app = express();

//req -> middleware -> res

//Normal way of approach 

// app.get('/',(req,res,next) => {
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getTime();
//     console.log(method,url,time);
//     next();
// })

// By using middleware we can get the data as same with specifically -> As by defining and using it for n number of times.
//Here logger is the middleware.
const logger = (req, res, next) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getDate();
    console.log(method,url,time);
    next();
}
//The middleware of logger is used in below to get the supposed data from there in the console.

app.get('/',logger,(req,res)=> {
    res.send("Home Page");
})
app.get('/about',logger,(req,res)=>{
    res.send("About")
})


app.listen(5000, (req,res) => {
    //res.status(200).json({success:true});
    console.log('listening on port 5000...')
})