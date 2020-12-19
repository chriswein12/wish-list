// file contains item-routes
const router = require('express').Router();
const { Users, Wishlists, Items } = require('../../models');

// returns 'add item' form
router.get('/', (req, res) => {
    console.log('route returns item form');
    res.send('add item form')
})

// returns selected item details
router.get('/:id', (req, res) => {
    console.log('route returns selected item info');
    res.send('item data')
})

// create/add new item
router.post('/', (req, res) => {
    console.log('route creates new item');
    res.send('enter new item data')
})


module.exports = router;