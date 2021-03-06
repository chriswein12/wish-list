// file contains item-routes
const router = require('express').Router();
const { Users, Wishlists, Items } = require('../../models');
// linking auth
const withAuth = require('../../utils/auth');

// returns 'add item' form
router.get('/', (req, res) => {
    Items.findAll({
        attributes: [
            'id',
            'item_name',
            'price',
            'purchase_location',
            'link',
            'description',
            'wishlist_id'
        ],
        include: [
            {
                model: Wishlists,
                attributes: [
                    'id',
                    'wishlist_name',
                    'event_date',
                    'user_id'
                ]
            }
        ]
    })
        .then(dbItemData => res.json(dbItemData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
})

// returns selected item details
router.get('/:id', (req, res) => {
    Items.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'item_name',
            'price',
            'purchase_location',
            'link',
            'description',
            'wishlist_id'
        ],
        include: [
            {
                model: Wishlists,
                attributes: [
                    'id',
                    'wishlist_name',
                    'event_date',
                    'user_id'
                ]
            }
        ]
    })
        .then(dbItemData => res.json(dbItemData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
})

// create/add new item
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Items.create({
            item_name: req.body.item_name,
            price: req.body.price,
            purchase_location: req.body.purchase_location,
            link: req.body.link,
            description: req.body.description,
            wishlist_id: req.body.wishlist_id
        })
            .then(dbItemData => res.json(dbItemData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
})

router.put('/:id', withAuth, (req, res) => {
    if (req.session) {
        Items.update(
            {
                item_name: req.body.item_name,
                price: req.body.price,
                purchase_location: req.body.purchase_location,
                link: req.body.link,
                description: req.body.description
            },
            {
                where: {
                    id: req.params.id
                }
            })
            
            .then(dbItemData => {
                if (!dbItemData) {
                    console.log('dbItemData: ', dbItemData)
                    res.status(404).json({ message: 'This id does not match any items.' });
                    return;
                }
                res.json(dbItemData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    }
});

router.delete('/:id', withAuth, (req, res) => {
    Items.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbItemData => {
            if (!dbItemData) {
                res.status(404).json({ message: 'This id does not match any items.' });
                return;
            }
            res.json(dbItemData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;