const express = require('express')

const app = express();
//JSON method is used to get the data/ add data , if convert then we have stringify to convert data to string.
app.get('/', (req, res)=> {
    res.json([{name: 'Haary', age : 12},{name: 'Porter', age : 13}]);
})


app.listen(5000, ()=> {
    console.log('listening on port 5000...!');
});