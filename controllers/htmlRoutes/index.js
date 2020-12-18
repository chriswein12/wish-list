// package contents of 'htmlRoutes' for import by controllers/index.js

const router = require('express').Router();

const homepageRoutes = require('./homepage-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homepageRoutes);
router.use('/home', dashboardRoutes);

module.exports = router;