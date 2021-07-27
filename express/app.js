// // we are cloning this is in navbar here for checking of functionality of status.

// const http = require('http')
// const {readFileSync} = require('fs')

// //Global path for accesing the required files

// const homePage = readFileSync('./navbar-app/index.html')
// const homeStyle = readFileSync('./navbar-app/styles.css')
// const homeImage = readFileSync('./navbar-app/logo.svg')
// const homeLogic = readFileSync('./navbar-app/browser-app.js')

// const server = http.createServer((req,res)=>{
    
//    const url = req.url
//     //home page 
//     if(url === '/'){
//         res.writeHead(200,{'Content-Type':"text/html"})
//         res.write(homePage)
//         res.end()
//     }
//     //about 
//     else if(url === '/about'){
//         res.writeHead(200,{'Content-Type':"text/html"})
//         res.write("This is the about page")
//         res.end()
//     }
//     //style
//     else if(url === '/styles.css'){
//         res.writeHead(200,{'Content-Type':"text/css"})
//         res.write(homeStyle)
//         res.end()
//     }
//     //Image/logo
//     else if(url === '/logo.svg'){
//         res.writeHead(200,{'Content-Type':"image/svg+xml"})
//         res.write(homeImage)
//         res.end()
//     }
//     //logic/Js file
//     else if(url === '/browser-app.js'){
//         res.writeHead(200,{'Content-Type':"text/javascript"})
//         res.write(homeLogic)
//         res.end()
//     }else {
//         res.writeHead(404,{'Content-Type':"text/"})
//         res.write("Oops!")
//         res.end();
//     }
// })
// server.listen(5000)

// const express = require('express')

// // Fetching the json data from data
// const {products} = require('./data');

// const app = express();
// //JSON method is used to get the data/ add data , if convert then we have stringify to convert data to string.
// app.get('/', (req, res)=> {
//     res.json(products);
//     // res.json(persons);
// })
// app.listen(5000, ()=> {
//     console.log('listening on port 5000...!');
// });



// const express = require('express');
// const {products} = require('./data');

// const app = express();

// app.get('/',(req,res)=>{
//     //Directly calling the api and adding the resource for it
//     res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
// })
//Now need to get data for the api which we passed 
// app.get('/api/products',(req,res)=>{
//     //creating a new intsnce for products and mapping them to the product(<-new instnce)

//     const newProducts = products.map((product)=> {
//         const {id, name,image} = product;
//         return {id, name, image}
//     }) 
//     res.json(newProducts)
// })

// app.get('/api/products/1',(req,res)=>{
    
//     const singleData = products.find((product)=>product.id ===1)
//     res.json(singleData);
// })

// app.get('/api/products/:productID',(req,res) => {
//     console.log(req)
//     console.log(req.params)
//     const singleProduct = products.find((product)=>product.id ===1)
//     res.json(singleProduct);
// })

// app.get('/api/v1/query',(req,res)=> {
//     //console.log(req.query);
//     // for query we are giving some sort of query to get data to applied searched/filtered values of data.
    
//     let {search, limit} = req.query;
//     let sortedProducts = [...products];
//     if(search) {
//         sortedProducts= sortedProducts.filter((product)=> {
//             return product.name.startsWith(search);
//         })
//     }
//     if(limit) {
//         sortedProducts = sortedProducts.slice(0,Number(limit));
//     }
//     if(sortedProducts.length<1){
//         //here we can't direct give the res data if so, it will throw a error as cannot set Headers after the data send to the client.
//         return res.status(200).json({success:true,message:[]});
//     }
//     res.status(200).json(sortedProducts);
// })

// app.listen(5000,()=> {
//     console.log('listening on port 5000...');
// })

// const express = require('express');

// const app = express();

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
// const logger = (req, res, next) =>{
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getDate();
//     console.log(method,url,time);
//     next();
// }

// app.get('/',logger,(req,res)=> {
//     res.send("Home Page");
// })
// app.get('/about',logger,(req,res)=>{
//     res.send("About")
// })


// const logger = require('./logger');

// app.use(logger)

// app.get('/',(req, res)=> {
//     res.send('Welcome to Home Page!');
// })

// app.get('/about',(req, res)=>{
//     res.send('Welcome to about page!');
// })

// app.get('/api/products',(req, res)=>{
//     res.send('Welcome to Product Page!');
// })

// app.get('/api/items',(req, res)=>{
//     res.send('Welcome to items page!');
// })


// app.listen(5000, (req,res) => {
//     //res.status(200).json({success:true});
//     console.log('listening on port 5000...')
// })

//The  usability of middleware as which by using the method of use in express to get the created middleware access.

// const express = require('express');
// const app = express();
// const morgan = require('morgan');
// //calling/importing the middleware
// //const logger = require('./logger')
// //const authorize = require('./exampAuthorize');
// //const exampAuthorize = require('./exampAuthorize');
// //app.use(logger, exampAuthorize);
// //app.use('/api',logger)
// //This is the Thirdparty middleware
// app.use(morgan('tiny'))
// app.get('/',(req, res)=> {
//     res.send('Welcome to Home Page!');
// })

// app.get('/about',(req, res)=>{
//     res.send('Welcome to about page!');
// })

// app.get('/api/products',(req, res)=>{
//     res.send('Welcome to Product Page!');
// })

// app.get('/api/items',(req, res)=>{
//     //console.log(req.user);
//     res.send('Welcome to items page!');
// })


// app.listen(5000,()=> {
//     console.log('listening on port 5000...')
// })

// const express = require('express');
// const app = express();

// let {people} = require('./data');
// //static assets
// app.use(express.static('./method-public'));

// // Parse form data
// app.use(express.urlencoded({ extended: false }))

// app.get('/api/people',(req, res)=>{
//     res.status(200).json({success:true,data:people});
// })

// app.post('/api/people',(req, res)=>{

//     const { name } = req.body;
//     if(!name) {
//        return res.status(400).json({success:false,msg:"Please provide valid details..!"})
//     }
//     res.status(201).json({success:true,person:name});
// })

// app.post('/login',(req, res)=>{
//     //console.log(req.body);
//     //Example way to validate the user login is successful/empty data
//     const {name} = req.body;
//     if(name) {
//         return res.status(200).send(`Welcome back ${name} ..!`);
//     }

//     res.status(401).send("PLease provide valid credentials")
// })

const express = require('express')
const app = express()

const people = require('./routes/peoples-route')

const auth = require('./routes/auth')

// static assets
app.use(express.static('./method-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())


app.use('/api/people',[people,auth])


app.listen(5000,()=> {
    console.log('listening on port 5000...')
})