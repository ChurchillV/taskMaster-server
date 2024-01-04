const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title : String,
    description : String,
    summary : String,
    user_id : { type : mongoose.Schema.Types.ObjectId, ref : 'User' },
    createdAt : { type : Date, default : Date.now() },
    updatedAt : { type : Date, default : Date.now() }
})

const Project = mongoose.model('Project', projectSchema );

module.exports = Project;