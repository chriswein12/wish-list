const sequelize = require('../config/connection');

const seedUsers = require('./user-seeds');
const seedWishlists = require('./wishlist-seeds');
const seedItems = require('./item-seeds');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedItems();
  console.log('\n----- ITEMS SEEDED -----\n')

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedWishlists();
  console.log('\n----- WISHLISTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
