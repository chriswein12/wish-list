// file contains wishlist-routes
const router = require('express').Router();
// const { User, Wishlist } = require('../../models');

// (‘/wishlist/’) returns list of wishlist-names and/or user-names
router.get('/', (req, res) => {
    console.log('writing to user-wishlist-page with wishlist data');
    res.send('wishlist template data')
})


// router.get(‘/:id’) - returns selected wishlist with all items/item info
router.get('/', (req, res) => {
    console.log('writing wishlist data');
    res.send('wishlist template data')
})


// router.post(‘/’) - returns data-entry fields for posting new items to wishlist
router.post('/', (req, res) => {
    console.log('writing wishlist data');
    res.send('wishlist template data')
})


module.exports = router;