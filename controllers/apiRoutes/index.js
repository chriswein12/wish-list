// package contents of 'apiRoutes' for import by controllers/index.js

const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const wishlistRoutes = require('./wishlist-routes.js');

router.use('./user', userRoutes);
router.use('./wishlist', wishlistRoutes);

module.exports = router;