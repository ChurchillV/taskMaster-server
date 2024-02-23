const router = require('express').Router();
const passport = require('passport');

// Importing route handlers
const { Signup, Login } = require('../Controllers/AuthController');

router.post('/signup', Signup);
router.post('/login', Login);

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
	req.session = null;
    req.logout();
	console.log("Logged out successfully");
})

// Google auth
router.get('/google', 
	passport.authenticate( 'google'));

router.get('/google/callback', (req, res) => {
	if(!req.user) {
		res.redirect('/auth/callback/failure');
		res.send("Welcome " + req.user.email);
	}
});

router.get('/callback/failure', (req, res) => {
	res.send("error");
})

// login success
// router.get("/login/success", (req, res) => {
// 	if (req.user) {
// 		res.status(200).json({
// 			error: false,
// 			message: "Successfully Logged In",
// 			user: req.user,
// 		});
// 	} else {
// 		res.status(403).json({ error: true, message: "Not Authorized" });
// 	}
// });
    
// router.get('/google/callback/', (req, res) => {
//     res.send('Redirect successful');
// });


module.exports = router; 