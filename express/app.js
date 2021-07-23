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



const express = require('express');
const {products} = require('./data');

const app = express();

app.get('/',(req,res)=>{
    //Directly calling the api and adding the resource for it
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
})
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

app.get('/api/v1/query',(req,res)=> {
    //console.log(req.query);
    // for query we are giving some sort of query to get data to applied searched/filtered values of data.
    
    let {search, limit} = req.query;
    let sortedProducts = [...products];
    if(search) {
        sortedProducts= sortedProducts.filter((product)=> {
            return product.name.startsWith(search);
        })
    }
    if(limit) {
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    res.status(200).json(sortedProducts);
})

app.listen(5000,()=> {
    console.log('listening on port 5000...');
})