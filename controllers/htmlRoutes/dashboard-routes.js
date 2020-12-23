// dependencies
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Wishlists, Users } = require('../../models');
// const { findAll } = require('../../models/Users');


// returns dashboard
router.get('/', (req, res) => {
    console.log('route returns dashboard')
    //res.send('dashboard template')
    Wishlists.findAll({
        //where: {
        //    user_id: req.session.user_id
        //},
        attributes: [
            'id',
            'wishlist_name',
        ]
    })
        .then(dbWishlistData => {
            const lists = dbWishlistData.map(list => list.get({ plain: true }));
            res.render('dashboard', { lists })
        })
        .catch(err => {
            //console.log(err);
            res.status(500).json(err);
        });
})


// ends session
router.get('/logout', (req, res) => {
    console.log('redirects to homepage')
    res.send('your session has ended')
})



module.exports = router;