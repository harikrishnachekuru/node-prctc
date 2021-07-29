const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')

//Trying for getting the data for middleware of asyncWrapper.
const getAllTasks = asyncWrapper(

    async (req, res) => {

        const tasks = await Task.find({})
        res.status(200).json({ tasks }) //As calling this as object form es6 
        //we can also use any type of things
        //res.status(200).json({tasks,amount:tasks.length})
        //res.status(200).json({status: 'Success',data : {tasks, nbHits:tasks.length}}) 
    }
)
// After making changes as per Task doing changes for create with returns the data to DB 
// As we set async function in the app so, here also using the sync and awit functions

const createTask = asyncWrapper(

    async (req, res) => {
        //To create task we just passing and printing body to postman with task 
        //As async functions which can't wait for another operation/always do some operation , we can do avoid throgh try and catch methods.

        const task = await Task.create(req.body);
        res.status(201).json({ task })

    }
)

//Normal way to create
// const createTask = (req,res) => {
//     res.json(req.body)
// }

const getTask = asyncWrapper(

    async (req, res,next) => {

        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        //To avoid Id mismatch/ some cases-> Cast errors
        if (!task) {
            //We can also set error messages 
            const error = new Error('Data Not Found');
            error.status = 404;
            return next(error);
            return res.status(404).json({ msg: `Task not found with id ${taskID}` })
        }

        res.status(200).json({ task })
    }
)


const deleteTask = asyncWrapper(

    async (req, res) => {

        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })

        if (!task) {
            return res.status(404).json({ msg: `No task found with id : ${taskID}` })
        }
        res.status(200).json({ task });

    }
)

const updateTask = asyncWrapper(

    async (req, res) => {


        const { id: taskID } = req.params;
        // Here we are passing the req.body to view the updated data and keeping valid and new data to fetch which setting up the valus.
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true });

        if (!task) {
            return res.status(404).json({ msg: `No data found with id : ${taskID}` });
        }

        res.status(200).json({ task })
    }
)

// Here for edit we can omit/remove the overwrited data while editing that is the main diff for put and patch.
// const editTask = async (req,res) => {

//     try {

//         const {id: taskID} = req.params;
//         // Here we are passing the req.body to view the updated data and keeping valid and new data to fetch which setting up the valus.
//         const task = await Task.findOneAndUpdate({_id: taskID},req.body,{new:true, runValidators: true, overwrite: true});

//         if(!task){
//             return res.status(404).json({msg: `No data found with id : ${taskID}`});
//         }

//         res.status(200).json({task})
//     } catch (error) {
//         res.status(500).json({ msg : error})
//     }
// }

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    //editTask
}

// Rest - representational state transfer.