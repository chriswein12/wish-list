// dependencies
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Wishlists, Users } = require('../../models');


// returns dashboard
router.get('/', (req, res) => {
    console.log('route returns dashboard')
    Wishlists.findAll({
        where: {
           user_id: req.session.user_id
        },
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
        .then(dbWishlistData => {
            // serialize data and save to new 'lists' array: returns specified data for each wishlist rather than the whole Sequelize object
            const lists = dbWishlistData.map(list => list.get({ plain: true }));
            res.render('dashboard', {lists, loggedIn: req.session.loggedIn}) 
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