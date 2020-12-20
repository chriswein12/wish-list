// linking models
const { Users } = require('../models');
const bcrypt = require('bcrypt');

// data array
const usersData = [
    {
        username: 'billy the kid',
        email: 'theKid@gmail.com',
        password: 'Tough2crack'
    },
    {
        username: 'bob the man',
        email: 'theMAN@gmail.com',
        password: 'NOTTough2crack'
    },
    {
        username: 'SallySuperWoman',
        email: 'KickButt@gmail.com',
        password: 'SuckerPunch2'
    }
]

//seeding users
const seedUsers = async () => await Users.bulkCreate(usersData);

// console.log('seedUsers: ', seedUsers);

//exporting
module.exports = seedUsers;