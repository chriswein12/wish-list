const seedUsers = require('./users');
const seedWishlists = require('./wishlists');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedWishlists();
  console.log('\n----- WISHLISTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
