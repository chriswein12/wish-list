// dependencies
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Users, Wishlists, Items } = require('../../models');

// returns home page
router.get('/', (req, res) => {
    console.log("the cookie is: ", req.session.loggedIn);
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    console.log('route returns home page')
    console.log('res.body: ', res.body)
    res.render('homepage', {loggedIn: req.session.loggedIn});
    
})

// ends session
router.get('/logout', (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/homepage');
        return;
    }
    res.render('homepage');
})

module.exports = router;