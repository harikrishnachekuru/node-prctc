const express = require('express');

const router = express.Router();

const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    //editTask
} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask)
//Patch is a method that used to update the data ,we can also use put for update.
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)//.put(editTask);

module.exports = router;