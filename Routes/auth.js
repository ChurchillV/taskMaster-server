const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    console.log('logging in');
})

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    console.log('logging out');
})

// auth with google
router.get('/google', passport.authenticate("google"));
    

router.get('/google/callback/', (req, res) => {
    res.send('Redirect successful');
})

module.exports = router; 