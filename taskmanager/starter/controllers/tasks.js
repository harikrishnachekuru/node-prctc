const Task = require('../models/Task')

const getAllTasks = async (req,res) =>{
    try {
        
        const tasks = await Task.find({})
        res.status(200).json({ tasks }) //As calling this as object form es6 
    } catch (error) {
        res.status(500).json({ msg : error})
    }
}
// After making changes as per Task doing changes for create with returns the data to DB 
// As we set async function in the app so, here also using the sync and awit functions
const createTask = async (req,res) => {
    //To create task we just passing and printing body to postman with task 
    //As async functions which can't wait for another operation/always do some operation , we can do avoid throgh try and catch methods.
    
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }

}

//Normal way to create
// const createTask = (req,res) => {
//     res.json(req.body)
// }

const getTask = async (req,res) => {
    try {
        const {id:taskID} = req.params
        const singleTask = await Task.findOne({_id:taskID})
        //To avoid Id mismatch/ some cases-> Cast errors
        if(!singleTask){
            return res.status(404).json({msg: `Task not found with id ${taskID}`})
        }

        res.status(200).json({singleTask})
    } catch (error) {
     res.status(500).json({ msg : error})   
    }
}


const deleteTask = async (req,res) => {
    try {
        const {id: taskID} = req.params
        const taskDelete = await Task.findOneAndDelete({_id: taskID})
        
        if(!taskDelete) {
            return res.status(404).json({msg:`No task found with id : ${taskID}`})
        }
        res.status(200).json({taskDelete});
        
    } catch (error) {
        res.status(500).json({ msg : error})
    }
}

const updateTask = async (req,res) => {
    
    try {
        
        const {id: taskID} = req.params;
        // Here we are passing the req.body to view the updated data and keeping valid and new data to fetch which setting up the valus.
        const task = await Task.findOneAndUpdate({_id: taskID},req.body,{new:true, runValidators: true});
    
        if(!task){
            return res.status(404).json({msg: `No data found with id : ${taskID}`});
        }
    
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({ msg : error})
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}

// Rest - representational state transfer.