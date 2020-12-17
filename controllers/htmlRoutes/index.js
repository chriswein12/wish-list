// package contents of 'htmlRoutes' for import by controllers/index.js

const router = require('express').Router();

const landingPageRoutes = require('./landingpage-routes.js');
const homePageRoutes = require('./homepage-routes.js');

router.use('/', landingPageRoutes);
router.use('/home', homePageRoutes);

module.exports = router;