// dependencies
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Users, Wishlists, Items } = require('../../models');
// linking auth
const withAuth = require('../utils/auth');

// returns home page
router.get('/', withAuth, (req, res) => {
    console.log(req.session.loggedIn);
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    console.log('route returns home page')
    console.log('res.body: ', res.body)
    res.render('homepage');
    
})

// ends session
router.get('/logout', (req, res) => {
    console.log('redirects to homepage')
    res.send('your session has ended')
})

// returns login/signup page or user’s dashboard if there’s an active session
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('dashboard');    
})


module.exports = router;