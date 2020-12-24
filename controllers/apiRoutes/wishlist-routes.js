// file contains wishlist-routes
const router = require('express').Router();
const { Users, Wishlists, Items } = require('../../models');
const helpers = require('../../utils/helpers.js')
// linking auth
const withAuth = require('../../utils/auth');


// returns all wishlists
// future removal. 
router.get('/', (req, res) => {
    Wishlists.findAll({
        attributes: [
            'id',
            'wishlist_name',
            // 'event_date',
            'user_id'
        ],
        include: [
            {
                model: Users,
                attributes: ['id', 'username']
            }
        ]
    })
        .then(dbWishlistData => res.json(dbWishlistData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// returns selected wishlist
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
                attributes: ['id', 'item_name', 'price', 'purchase_location', 'link', 'description']
            },
            {
                model: Users,
                attributes: ['id', 'username']
            }
        ]
    })
        .then(dbWishlistData => {
            if (!dbWishlistData) {
                res.status(404).json({ message: 'No wishlist found with this id.' });
                return;
            }
            res.json(dbWishlistData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create new wishlist
router.post('/', withAuth, (req, res) => {
    Wishlists.create({
        wishlist_name: req.body.wishlist_name,
        event_date: req.body.event_date,
        user_id: req.body.user_id
    })
        .then(dbWishlistData => res.json(dbWishlistData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.put('/:id', withAuth, (req, res) => {
    Wishlists.update(
        {
            wishlist_name: req.body.wishlist_name,
            event_date: req.body.event_date,
            user_id: req.body.user_id,
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(dbWishlistData => {
            if (!dbWishlistData) {
                console.log('dbWishlistData: ', dbWishlistData)
                res.status(404).json({ message: 'This id does not match any wishlists.' });
                return;
            }
            res.json(dbWishlistData);
        })
        console.log('dbWishlistData: ', dbWishlistData)

        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete wishlist. 
router.delete('/:id', withAuth, (req, res) => {
    Wishlists.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbWishlist => {
            if (!dbWishlist) {
                res.status(404).json({ message: 'No wishlist found with this id.' });
                return;
            }
            res.json(dbWishlist);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;