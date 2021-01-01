// linking Model template and datatypes with sequelize
const { Model, DataTypes } = require('sequelize');
// linking connection
const sequelize = require('../config/connection');
const { current_year } = require('../utils/helpers.js')

// creating wishlist model
class Wishlists extends Model {}

// creating new Wishlist instance; 
Wishlists.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    wishlist_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ['^[a-zA-Z0-9_ ]+$', 'i'],
        len: [1, 25]
      }
    },
    event_date: {
      type: DataTypes.DATEONLY,
      // returns default value: 'YYYY-12-25',
      defaultValue: function () {
        return current_year()
      },
      validation: {
        isDate: true
      },
      // allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
