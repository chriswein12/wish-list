// dependencies
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Users, Wishlists, Items } = require('../../models');

// returns dashboard
router.get('/', (req, res) => {
    console.log('route returns dashboard')
    res.send('dashboard template')
    // console.log('res.body: ', res.body)
    // res.render('homepage');

})

// ends session
router.get('/logout', (req, res) => {
    console.log('redirects to homepage')
    res.send('your session has ended')
})

// 


module.exports = router;