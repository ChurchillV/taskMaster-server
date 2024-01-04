const express = require('express');
const app = express();
require('dotenv').config();

// Mongoose import
const mongoose = require('mongoose');

// Importing environment variables
const { MONGO_URL } = process.env;

app.listen(2099, () => {
    console.log('TaskMaster is running on Port 2099');
})

// Connection to MongoDB
mongoose
    .connect(MONGO_URL)
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.error(err));
