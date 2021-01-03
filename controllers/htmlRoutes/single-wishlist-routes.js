// dependencies
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Users, Wishlists, Items } = require('../../models');

// display selected wishlist
router.get('/:id', (req, res) => {
    Wishlists.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'wishlist_name',
            'event_date',
            'user_id'
        ],
        include: [
            {
                model: Items,
                attributes: [
                    'id', 
                    'item_name', 
                    'price', 
                    'purchase_location', 
                    'link', 
                    'description', 
                    'wishlist_id'
                ]
            },
            {
                model: Users,
                attributes: ['id', 'username']
            }
        ]
    })
        .then(dbWishlistData => {
            console.log("Our returning Data", dbWishlistData.get({ plain: true }));
            console.log("ID: ", dbWishlistData.id);
            const listData = dbWishlistData.get({ plain: true });
            // console.log('listData.items[0]: ', listData.items[0])
            res.render('wishlist', { 
                listData, 
                loggedIn: req.session.loggedIn })
            // res.render('wishlist', { listData, loggedIn: req.session.loggedIn}) 
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;