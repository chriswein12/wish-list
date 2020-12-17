// dependencies
const router = require('express').Router();
const sequelize = require('../../config/connection');
// const { User, Wishlist } = require('../../models');

// returns homepage
router.get('/', (req, res) => {
    console.log('writing to home page')
    res.send('home page template')
})


// returns login/signup page or user’s page if there’s an active session
router.get('/login', (req, res) => {
    console.log('writing to user login modal')
    res.send('access login modal')
})

// 


module.exports = router;