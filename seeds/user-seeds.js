// linking models
const { Users } = require('../models');
const bcrypt = require('bcrypt');

const hashSeeds = async (password) => {
    let salt = await bcrypt.genSalt(10);
    let seedPw = await bcrypt.hash(password, salt);

    console.log('seedPw: ', seedPw);
    console.log('seedPw-type: ', typeof seedPw)
    return seedPw
}

// data array
const usersData = [
    {
        username: 'billy the kid',
        email: 'theKid@gmail.com',
        password: 'Tough2crack'
        // password: hashSeeds('Tough2crack')
    },
    {
        username: 'bob the man',
        email: 'theMAN@gmail.com',
        password: 'NOTTough2crack'
        // password: hashSeeds('NOTTough2crack')
    },
    {
        username: 'SallySuperWoman',
        email: 'KickButt@gmail.com',
        password: 'SuckerPunch2'
        // password: hashSeeds('SuckerPunch2')
    }
]

//seeding users
const seedUsers = () => Users.bulkCreate(usersData);
console.log('seedUsers: ', seedUsers);

//exporting
module.exports = seedUsers;