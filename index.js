const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const authRoutes = require('./Routes/auth');
const passportSetup = require('./passport')


// Mongoose import
const mongoose = require('mongoose');


// Importing environment variables
const { MONGO_URL } = process.env;


// Passport authentication seession initialization
app.use(
	cookieSession({
		name: "session",
		keys: ["taskMaster"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);


// For parsing api requests
app.use(express.json());


app.listen(2099, () => {
    console.log('TaskMaster is running on Port 2099');
})

// Connection to MongoDB
mongoose
    .connect(MONGO_URL)
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.error(err));


// Set up routes
app.use('/auth', authRoutes);
app.use('/', authRoutes);
