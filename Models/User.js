const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String,
    createdAt : { type : Date, default : Date.now()},
    updatedAt : { type : Date, default : Date.now()}
})


const User = mongoose.model('User', userSchema);

module.exports = User;