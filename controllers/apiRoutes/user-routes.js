const router = require('express').Router();
// const { User, Wishlist } = require('../../models')

// returns user list
router.get( '/', (req, res) => {
    console.log("route returns list of all users")
    res.send('user list')
})

// returns single user's info
router.get( '/:id', (req, res) => {
    console.log("route returns individual user info")
    res.send('user data')
})

// returns user sign-up fields
router.post( '/', (req, res) => {
    console.log("route creates new user")
    res.send('enter sign-up info')
})

// returns user login
router.post( '/login', (req, res) => {
    // expects {email: 'sam@mail.com', password: '123456'}
    console.log("route authorizes user login")
    res.send('enter login data')
})

// ends session
router.post( '/logout', (req, res) => {
    console.log("route ends session")
    res.send('you are now logged out')
})


module.exports = router;