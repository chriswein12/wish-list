// package contents of 'apiRoutes' for import by controllers/index.js
//===================================================================
//dependencies
const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const wishlistRoutes = require('./wishlist-routes.js');
const itemRoutes = require('./item-routes.js');

// prefix routes
router.use('/users', userRoutes);
router.use('/wishlists', wishlistRoutes);
router.use('/items', itemRoutes);

module.exports = router;