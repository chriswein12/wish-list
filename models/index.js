// liniking Users model 
const Users = require("./Users");
// linking Wishlists model
const Wishlists = require("./Wishlists");
// linking Items model
const Items = require("./Items");

// Creating Associations. Linking One users to many wishlists
Users.hasMany(Wishlists, {
    foreignKey: 'users_id'
});

Wishlists.belongsTo(Users, {
    as: 'UserWishlist',
    constraints: false,
    // foreignKey: 'users_id',
});

Wishlists.hasMany(Items, {
    foreignKey: 'items_id'
});

Items.belongsTo(Wishlists, {
    foreignKey: 'items_id'
});

module.exports = { Users, Wishlists, Items };