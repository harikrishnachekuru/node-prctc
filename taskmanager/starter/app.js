const express = require('express');

const app = express();

const tasks = require('./routes/tasks');

const connectDB =require('./db/connect');
require('dotenv').config();
//const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler');
//middleware
app.use(express.json())
app.use(express.static('./public'))
//app.use(notFound)
app.use(errorHandlerMiddleware);
//routes
// app.get('/hello',(req,res)=>{
//     res.send(`Task Manager`)
// })

app.use('/api/v1/tasks', tasks);

//app.get('/api/v1/tasks')    -- Get all the tasks
//app.post('/api/v1/tasks')   -- create a new task
//app.get('/api/v1/tasks/:id') -- get the single task
//app.patch('/api/v1/tasks/:id') -- update the task
//app.delete('/api/v1/tasks/:id') -- delete the task

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        
        app.listen(port,()=>{
            console.log('listening on port 3000');
        })
    } catch (error) {
        console.log(error)
    }
}

start()

