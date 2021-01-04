const router = require('express').Router();
// const bcrypt = require('bcrypt');
const { Users, Wishlists, Items } = require('../../models');
// linking auth
// const withAuth = require('../../utils/auth');

// returns all users
// mark for eventual removal
router.get('/', (req, res) => {
    Users.findAll()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

// returns user's dashboard data
router.get('/:id', (req, res) => {
    Users.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Wishlists,
                attributes: ['wishlist_name'],
                include: {
                    model: Items,
                    attributes: ['item_name', 'price', 'purchase_location', 'link', 'description']
                }
            },
        ]
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user with this id was found.' });
                alert('No user with this id was found.');
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

// creates a new user
router.post('/', (req, res) => {
    // console.log('req.body: ', req.body)
    Users.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => {
            // this callback ensures the session is created prior to sending response
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            req.session.save(() => {
                // response is sent only after previous code runs
                res.json(dbUserData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

// route validates user login and starts new session
router.post('/login', (req, res) => {
    Users.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        console.log('dbUserData: ', dbUserData);
        console.log('dbUserData.id: ', dbUserData.id);
        console.log('dbUserData.dataValues.id: ', dbUserData.dataValues.id);
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address was found.' });
            alert('No user with that email address was found.')
            return;
        }
        const validPassword = dbUserData.checkPassword(req.body.password);
        // const validPassword = bcrypt.checkPassword(password, hashedPassword);

        if (!validPassword) {
            res.status(400).json({ message: 'The password you entered is incorrect.' });
            alert('The password you entered is incorrect.')
            return;
        }
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in.' });
        })

    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// ends session
router.post('/logout', (req, res) => {

    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
})


module.exports = router;