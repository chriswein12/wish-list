// linking models
const { Users } = require('../models');

// data array
const usersData = [
    {
        username: 'billy the kid',
        email: 'theKid@gmail.com',
        password: 'Tough2crack',
    },
    {
        username: 'bob the man',
        email: 'theMAN@gmail.com',
        password: 'NOTTough2crack',
    },
    {
        username: 'SallySuperWoman',
        email: 'KickButt@gmail.com',
        password: 'SuckerPunch2',
    }
]

//seeding users
const seedUsers = () => Users.bulkCreate(usersData);

//exporting
module.exports = seedUsers;