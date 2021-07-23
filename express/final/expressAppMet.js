const express = require('express');

const path = require('path');

const app = express();

// We can use method of static in express to directly use the file as in root path
//static means the thing which can't be changed.
// method-public is the root file for style,logo,js logic
app.use(express.static('./exmpPublic'));

app.get('/', (req, res) =>{
    //sendFile is the method to send the file as to fetch.
    // resolve/join can be used to get the strings data.
    //Adding to static assets 
    //ServerSideRendering.

    //The below is commented of because all the files are fetching from the same folder which by using static method of express to fetch the data.
    //res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'));
})

app.all('*', (req, res) =>{
    res.status(404).send("Resource not found")
})

app.listen(5000,()=> {
    console.log('listening on port 5000...');
})