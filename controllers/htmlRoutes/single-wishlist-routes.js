// dependencies
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Users, Wishlists, Items } = require('../../models');

// router.get('/:id', (req, res) => {
//     Items.findAll({
//         where: {
//             wishlist_id: req.params.id
//         },
//         attributes: [
//             'id',
//             'item_name',
//             'price',
//             'purchase_location',
//             'link',
//             'description',
//             'wishlist_id'
//         ],
//         include: [
//             {
//                 model: Wishlists,
//                 attributes: [
//                     'id',
//                     'wishlist_name',
//                     'event_date',
//                     'user_id'
//                 ]
//             },
//             {
//                 model: Users,
//                 attributes: ['id', 'username']
//             }
//         ]
//     })
//     .then(dbItemData => {
//         // debugger
//         console.log("req.params: ", req.params);
//         console.log('dbItemData: ', dbItemData);
//         // console.log("dbItemData", dbItemData.get({ plain: true }));
//         // console.log("ID: ", dbWishlistData.id);
//         // const itemData = dbItemData.get({ plain: true });
//         res.render('dbItemData', { dbItemData })
//         // res.render('wishlist', { listData, loggedIn: req.session.loggedIn}) 
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// })

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
            res.render('wishlist', { listData })
            // res.render('wishlist', { listData, loggedIn: req.session.loggedIn}) 
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;