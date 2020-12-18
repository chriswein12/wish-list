const router = require('express').Router();
// const { Users, Wishlists, Items } = require('../../models')


// returns user's dashboard data
router.get( '/:id', (req, res) => {
    console.log("route returns individual user info")
    res.send('user data')
    // Users.findOne({
    //     attributes: { exclude: ['password'] },
    //     where: {
    //         id: req.params.id
    //     },
    //     include: [
    //         {
    //             model: Wishlists,
    //             attributes: ['wishlist_name'],
    //             include: {
    //                 model: Items,
    //                 attributes: ['item_name', 'price', 'purchase_location', 'link', 'description']
    //             }
    //         },
    //     ]
    // })
    // .then(dbUserData => {
    //     if (!dbUserData) {
    //         res.status(404).json({ message: 'No user with this id was found.' });
    //         return;
    //     }
    //     res.json(dbUserData);
    // })
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json(err);
    // });
})

// returns user sign-up fields
router.post( '/', (req, res) => {
    console.log("route creates new user")
    res.send('enter sign-up info')
    // User.create({
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: req.body.password
    // })
    // .then(dbUserData => {
    //     // this callback ensures the session is created prior to sending response
    //     req.session.user_id = dbUserData.id;
    //     req.session.username = dbUserData.username;
    //     req.session.loggedIn = true;
        
    //     req.session.save(() => {

    //         // response is sent only after previous code runs
    //         res.json(dbUserData);
    //     });
    // })       
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json(err);
    // });
})

// route validates user login and starts new session
router.post( '/login', (req, res) => {
    console.log("route authorizes user login")
    res.send('enter login data')
    // User.findOne({
    //     where: {
    //         email: req.body.email
    //     }
    // }).then(dbUserData => {
    //     console.log('dbUserData: ', dbUserData);
    //     console.log('dbUserData.id: ', dbUserData.id);
    //     console.log('dbUserData.dataValues.id: ', dbUserData.dataValues.id);
    //     if (!dbUserData) {
    //         res.status(400).json({ message: 'No user with that email address!' });
    //         return;
    //     }
    //     const validPassword = dbUserData.checkPassword(req.body.password);

    //     if (!validPassword) {
    //         res.status(400).json({ message: 'Incorrect password! Try again.' });
    //         return;
    //     }
    //     req.session.save(() => {
    //         req.session.user_id = dbUserData.id;
    //         req.session.username = dbUserData.username;
    //         req.session.loggedIn = true;
    //     });
        
    //     res.json({ user: dbUserData, message: 'You are now logged in.' });
    // })
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json(err);
    // });
})

// ends session
router.post( '/logout', (req, res) => {
    console.log("route ends session")
    res.send('you are now logged out')
    // if (req.session.loggedIn) {
    //     req.session.destroy(() => {
    //         res.status(204).end();
    //     });
    // } else {
    //     res.status(404).end();
    // }
})


module.exports = router;