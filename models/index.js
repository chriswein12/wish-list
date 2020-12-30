// liniking Users model 
const Users = require("./Users");
// linking Wishlists model
const Wishlists = require("./Wishlists");
// linking Items model
const Items = require("./Items");

// Creating Associations. Linking One users to many wishlists
Users.hasMany(Wishlists, {
    foreignKey: 'user_id'
});

Wishlists.belongsTo(Users, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Wishlists.hasMany(Items, {
    // constraints: false,
    foreignKey: 'wishlists_id',
    onDelete: 'SET NULL'
});

Items.belongsTo(Wishlists, {
    constraints: false,
    foreignKey: 'wishlists_id',
    onDelete: 'SET NULL'
});

Items.belongsTo(Users, {
    foreignKey: 'user_id'
});

module.exports = { Users, Wishlists, Items };
