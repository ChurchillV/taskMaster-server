const User = require('../Models/User');
const { createSecretToken } = require('../Util/SecretToken');
const { isValidEmail } = require('../Util/ValidateEmail');
const bcrypt = require('bcryptjs');

// Signup handler 
module.exports.Signup = async(req, res, next) => {
    try {
        const { email, password, username } = req.body;
        
        if(!isValidEmail(email)) {
            return res.status(400)
                      .json({message : "Invalid email"});
        };

        const user = await User.create({
            username : username,
            email : email,
            password : password
        });

        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });

        res.status(201)
           .json({ message: "User signed up successfully", success: true, user });

        console.log(`${username} has signed up Successfully`);
        next(); 

    } catch(error) {
        console.log(error);
    }
}

// Login handler 
module.exports.Login = async(req, res, next) => {
    try {
        const {usernameOrEmail, password} = req.body;

        const user = await User.findOne({ $or : [{username : usernameOrEmail}, {email : usernameOrEmail}]});

        if(!user) {
            res.status(404)
               .json({ message : `No user ${usernameOrEmail} found`})
        }

        const validPassword = bcrypt.compare(password, user.password);

        if(!validPassword) {
            res.json({ message : "Password is incorrect" })
        }

        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });

        res.status(201)
           .json({ message: "User logged in successfully", success: true, user });

        console.log(`${user.username} has logged in Successfully`);

        next();

    } catch(error) {
        console.log(error);
    }
}