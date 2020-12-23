// package contents of 'htmlRoutes' for import by controllers/index.js
//====================================================================
//dependencies
const router = require('express').Router();

const homepageRoutes = require('./homepage-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const singleWishlistRoutes = require('./single-wishlist-routes');

// prefix routes
router.use('/', homepageRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/wishlist', singleWishlistRoutes);

module.exports = router;