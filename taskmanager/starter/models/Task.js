//This is for creating schemas , models and other Db things

const mongoose = require('mongoose');

// This is the schema which will be created for the database
// IN the schema we will be give key value pairs which notates variable as Data Types.
//whatever we set up in the schema that only be updated if given extra data that will be ignored.
const TaskSchema = new mongoose.Schema({
    //name:String,
    // To add secured and validation we do a format as alloting some required things 
    name : {
        type: String,
        required : [true,'please provide the name'], // It is just providing to test.
        trim : true,    // To avoid the whitespaces we use trim
        maxlength : [20,'name can not be more than 20 characters'] 
    },
    completed: {
        type : Boolean,
        default : false     // If we set it to default automatically it pics the value as false.If we comment and use put method instead of patch then we can get a chance of setting this overwrites and emits the other values.
    }
})
//model is the main thing that colects/converts data
//We just pass in model as of name and the Schema 
module.exports = mongoose.model('Task',TaskSchema)