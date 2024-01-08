const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String,
    createdAt : { type : Date, default : Date.now()},
    updatedAt : { type : Date, default : Date.now()}
})

// Hash password before saving
userSchema.pre("save", async function() {
    this.password = bcrypt.hash(this.password, 12);
})

const User = mongoose.model('User', userSchema);

module.exports = User;