// package controllers for importation by server.js

const router = require('express').Router();

const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('./apiRoutes');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(400).end();
})

module.exports = router;