// package contents of 'htmlRoutes' for import by controllers/index.js
//====================================================================
//dependencies
const router = require('express').Router();

const homepageRoutes = require('./homepage-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

// prefix routes
router.use('/', homepageRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;