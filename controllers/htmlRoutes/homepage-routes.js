// dependencies
const router = require('express').Router();
const sequelize = require('../../config/connection');
// const { User, Wishlist } = require('../../models');

// returns homepage
router.get('/', (req, res) => {
    console.log('route returns home page')
    res.send('home page template')
})

// ends session
router.get('/logout', (req, res) => {
    console.log('redirects to landing page')
    res.send('your session has ended')
})

// 


module.exports = router;