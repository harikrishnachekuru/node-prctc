const mongoose = require('mongoose');

const connectDB = (url) => {
    // To avoid deprecated messages in the console we can add parser,Index,Modify,Topology.
   return mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify:false,
        useUnifiedTopology: true,
    })
    //.then(()=> console.log('Connected to DB successfully...')).catch((err)=>console.log(err))
    
}

module.exports = connectDB;
