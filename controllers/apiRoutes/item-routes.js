// file contains item-routes
const router = require('express').Router();
const { Users, Wishlists, Items } = require('../../models');

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
        ],
    })
    .then(dbItemData => res.json(dbItemData))
    .catch (err => {
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
        ],
        include: [
            {
                model: Wishlists,
                attributes: [
                    'id',
                    'wishlist_name',
                ]
            }
        ]
    })
    .then(dbItemData => res.json(dbItemData))
    .catch (err => {
        console.log(err);
        res.status(400).json(err);
    });
})

// create/add new item
router.post('/', (req, res) => {
    if (req.session) {
        Items.create({
            item_name: req.body.item_name,
            price: req.body.price,
            purchase_location: req.body.purchase_location,
            link: req.body.link,
            description: req.body.description
        })
            .then(dbItemData => res.json(dbItemData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
})

router.put('/:id', (req, res) => {
    if (req.session) {
        Items.update(req.body, {
            // individualHooks: true,
            where: {
                id: req.params.id
            }
        })
        .then(dbItemData => {
            if (!dbItemData) {
                res.status(404).json({ message: 'This id does not match any items.' });
                return;
            }
            (dbItemData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }
});

router.delete('/:id', (req, res) => {
    if (req.session) {
        Items.destroy(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(dbItemData => {
            if (!dbItemData) {
                res.status(404).json({ message: 'This id doen not match any items.' });
                return;
            }
            (dbItemData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }
});

module.exports = router;