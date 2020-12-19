// linking models
const { Users } = require('../models');
const bcrypt = require('bcrypt');

const hashSeeds = async (password) => {
    let seedPw = await bcrypt.hash(password, 10);
    console.log('seedPw: ', seedPw);
    console.log('seedPw-type: ', typeof seedPw)
    return seedPw
}

// data array
const usersData = [
    {
        username: 'billy the kid',
        email: 'theKid@gmail.com',
        password: hashSeeds('Tough2crack')
    },
    {
        username: 'bob the man',
        email: 'theMAN@gmail.com',
        password: hashSeeds('NOTTough2crack')
    },
    {
        username: 'SallySuperWoman',
        email: 'KickButt@gmail.com',
        password: hashSeeds('SuckerPunch2')
    }
]

//seeding users
const seedUsers = () => Users.bulkCreate(usersData);
console.log('seedUsers: ', seedUsers);

//exporting
module.exports = seedUsers;