// file packages contents of 'controllers' folder for importation to server.js

const router = require('express').Router();

const htmlRoutes = require('./html-routes.js');
const apiRoutes = require('./apiRoutes.js');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(400).end();
})

module.exports = router;