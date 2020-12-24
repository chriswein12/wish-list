// linking models
const { Items } = require('../models');

// data array
const itemsData = [
    {
        item_name: 'billygoat',
        price: '65',
        wishlist_id: '1',
    },
    {
        item_name: 'bobbers',
        price: '26',
        wishlist_id: '2',
    },
    {
        item_name: 'Salsa shoes',
        price: '125',
        wishlist_id: '3'
    }
]

//seeding users
const seedItems = () => Items.bulkCreate(itemsData);

//exporting
module.exports = seedItems;