// file contains wishlist-routes
const router = require('express').Router();
// const { Users, Wishlists, Items } = require('../../models');

// returns all wishlists
router.get('/', (req, res) => {
    console.log('route returns all wishlists');
    res.send('wishlists')
})

// returns selected wishlist
router.get('/:id', (req, res) => {
    console.log('route returns one wishlist');
    res.send('wishlist data')
})

// create new wishlist
router.post('/', (req, res) => {
    console.log('route creates new wishlist');
    res.send('enter wishlist data')
})


module.exports = router;