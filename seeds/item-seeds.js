// linking models
const { Items } = require('../models');

// data array
const itemsData = [
    {
        item_name: 'billygoat',
        price: '65',
        // wishlist_id: 'a64f0573-c312-4ea2-8ccd-6cebda73d9d6',
    },
    {
        item_name: 'bobbers',
        price: '26',
        // wishlist_id: 'a64f0573-c312-4ea2-8ccd-7cebda73d9d6',
    },
    {
        item_name: 'Salsa shoes',
        price: '125',
        // wishlist_id: 'a64f0573-c312-4ea2-8ccd-8cebda73d9d6'
    }
]

//seeding users
const seedItems = () => Items.bulkCreate(itemsData);

//exporting
module.exports = seedItems;