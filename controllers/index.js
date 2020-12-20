// package controllers for importation by server.js
//===================================================
// dependencies
const router = require('express').Router();

const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('./apiRoutes');

// prefix endpoints
router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

// indicate incorrect resource error if non-existant request is made
router.use((req, res) => {
    res.status(400).end();
})

module.exports = router;