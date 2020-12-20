// dependencies
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Users, Wishlists, Items } = require('../../models');

// returns home page
router.get('/', (req, res) => {
    console.log('route returns home page')
    console.log('res.body: ', res.body)
    res.render('homepage');
    
})

// returns login/signup page or user’s dashboard if there’s an active session
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');    
})


module.exports = router;