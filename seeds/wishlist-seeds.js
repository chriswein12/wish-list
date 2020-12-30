// linking models
const { Wishlists } = require('../models');

// data array
const wishlistsData = [
    {
        id: 'a64f0573-c312-4ea2-8ccd-6cebda73d9d6',
        wishlist_name: 'billy the kid Nerf guns',
        user_id: 1 
    },
    {
        id: 'a64f0573-c312-4ea2-8ccd-7cebda73d9d6',
        wishlist_name: 'bobbys Manly toys',
        user_id: 2
    },
    {
        id: 'a64f0573-c312-4ea2-8ccd-8cebda73d9d6',
        wishlist_name: 'SallySuperWomanSuperSmasher',
        user_id: 3
    }
]

//seeding users
const seedWishlists = () => Wishlists.bulkCreate(wishlistsData);

//exporting
module.exports = seedWishlists;