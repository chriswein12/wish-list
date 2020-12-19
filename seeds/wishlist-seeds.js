// linking models
const { Wishlists } = require('../models');

// data array
const wishlistsData = [
    {
        wishlist_name: 'billy the kid Nerf guns',     
    },
    {
        wishlist_name: 'bobbys Manly toys',
    },
    {
        wishlist_name: 'SallySuperWomanSuperSmasher',
    }
]

//seeding users
const seedWishlists = () => Wishlists.bulkCreate(wishlistsData);

//exporting
module.exports = seedWishlists;