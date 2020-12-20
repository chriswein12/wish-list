// linking Model template and datatypes with sequelize
const { Model, DataTypes } = require('sequelize');
// linking connection
const sequelize = require('../config/connection');

// creating wishlist model
class Wishlists extends Model { }

// creating new Whislist instance
Wishlists.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    wishlist_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'wishlists'
  }
);

module.exports = Wishlists;
