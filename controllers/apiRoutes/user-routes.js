const router = require('express').Router();
// const { User, Wishlist } = require('../../models')

// (‘user/:id’) - returns user’s info and wishlist/s
router.get( '/:id', (req, res) => {
    console.log("writing to user's wishlist page")
    res.send('user info and landing page template')
})

// (‘user/:id’) - returns user’s info and wishlist/s
router.get( '/:id', (req, res) => {
    console.log("writing to user's wishlist page")
    res.send('user info and landing page template')
})


// (‘user/’) - returns user sign-up fields
router.post( '/', (req, res) => {
    console.log("writing to landing page with signup data")
    res.send('user signup template')

})


// (‘user/login’) - returns user login
router.post( '/login', (req, res) => {
    console.log("writing to user's wishlist page")
    res.send('user login data')
})


// (‘user/logout’) - ends session
router.post( '/logout', (req, res) => {
    console.log("writing to user's wishlist page")
    res.send('landing page template')
})


module.exports = router;