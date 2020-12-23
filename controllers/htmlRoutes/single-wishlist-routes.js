// dependencies
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Users, Wishlists, Items } = require('../../models');

router.get('/:id', (req, res) => {
    Wishlists.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'wishlist_name',
            // 'event_date',
            'user_id'
        ],
        include: [
            {
                model: Items,
                attributes: ['id', 'item_name', 'price', 'purchase_location', 'link', 'description']
            },
            {
                model: Users,
                attributes: ['id', 'username']
            }
        ]
    })
    .then(dbWishlistData => {
        // const listData = dbWishlistData.map(list => list.get({ plain: true }));
        res.render('wishlist', { dbWishlistData, loggedIn: req.session.loggedIn}) 
    })
    .catch(err => {
        //console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;