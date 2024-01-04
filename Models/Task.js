const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title : String,
    description : String,
    status : { type : String, default : "To Do", enum : ["To Do", "In Progress", "Done"]},
    due_date : Date,
    project_id : { type : mongoose.Schema.Types.ObjectId, ref : 'Project' },
    user_id : { type : mongoose.Schema.Types.ObjectId, ref : 'User' },
    created_at : { type : Date, default : Date.now() },
    updated_at : { type : Date, default : Date.now() }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;