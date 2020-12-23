// linking models
const { Wishlists } = require('../models');

// data array
const wishlistsData = [
    {
        wishlist_name: 'billy the kid Nerf guns',
        user_id: 1 
    },
    {
        wishlist_name: 'bobbys Manly toys',
        user_id: 2
    },
    {
        wishlist_name: 'SallySuperWomanSuperSmasher',
        user_id: 3
    }
]

//seeding users
const seedWishlists = () => Wishlists.bulkCreate(wishlistsData);

//exporting
module.exports = seedWishlists;