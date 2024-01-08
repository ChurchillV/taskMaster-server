const router = require('express').Router();
const passport = require('passport');

// Importing route handlers
const { Signup, Login } = require('../Controllers/AuthController');

router.post('/signup', Signup);
router.post('/login', Login);

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    console.log('logging out');
})

// auth with google
router.get('auth/google', passport.authenticate("google"));

// login success
router.get("auth/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: req.user,
		});
	} else {
		res.status(403).json({ error: true, message: "Not Authorized" });
	}
});
    
router.get('auth/google/callback/', (req, res) => {
    res.send('Redirect successful');
})

module.exports = router; 