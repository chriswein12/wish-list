// dependencies
const router = require('express').Router();
const sequelize = require('../../config/connection');
// const { User, Wishlist } = require('../../models');

// returns landing page
router.get('/', (req, res) => {
    console.log('route returns landing page')
    res.send('landing page template')
})

// returns login/signup page or user’s homepage if there’s an active session
router.get('/login', (req, res) => {
    console.log('route returns user login modal')
    res.send('login modal')

    // if (req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // }
    // res.render('login');    
})

// 


module.exports = router;