a// Here we are creating an instance for which the api will be set and get the only required data from the api.

const express = require('express');
const {products} = require('./data');

const app = express();

app.get('/',(req,res)=>{
    //Directly calling the api and adding the resource for it
    res.send('<h1>Home Page</h1><a href="/api/products></a>"');
})
//Now need to get data for the api which we passed 
app.get('/api/products',(req,res)=>{
    //creating a new intsnce for products and mapping them to the product(<-new instnce)

    const newProducts = products.map((product)=> {
        const {id, name,image} = product;
        return {id, name, image}
    }) 
    res.json(newProducts)
})

//If need to get for single product as follows a pattern of passing single digit 
app.get('/api/products/1',(req,res)=>{
    
    const singleData = products.find((product)=>product.id ===1)
    res.json(singleData);
})

//Route params in express will help to find the data to avoid 
//This will helps when we have n numbers of data in the api to get as based on the ID's
app.get('/api/products/:productID',(req,res) => {
    console.log(req)
    console.log(req.params)
    const singleProduct = product.find((product)=>product.id ===1)
    res.json(singleProduct);
})
// The above will be possible to get data for unneccesory product data entry also 

app.get('/api/products/:productID',(req,res) =>{

    const {productID} = req.params;

    if(!productID === products.length) {
        res.status(404).send("Product Resource not found")
    }else {
        const availProduct = products.find((product)=> product.id === Number(productID));
        res.json(availProduct);
    }
})

//To avail with reviews -> which is build in to get the same as prosduct data 

app.get('/api/products/:productID/reviews/:reviewId',(req,res)=>{
    console.log(req.params);
    res.send("Hello World!");
})

// query 
//By using this query we can alot the things what all are required with by setting a pattern of verson and query we can also do it with allowing for keywords.

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
    if(sortedProducts.length<1){
        //here we can't direct give the res data if so, it will throw a error as cannot set Headers after the data send to the client.
        return res.status(200).json({success:true,message:[]});
    }
    res.status(200).json(sortedProducts);
})

app.listen(5000,()=> {
    console.log('listening on port 5000...');
})
