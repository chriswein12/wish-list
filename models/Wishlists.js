// linking Model template and datatypes with sequelize
const { Model, DataTypes } = require('sequelize');
// linking connection
const sequelize = require('../config/connection');

// creating wishlist model
class Wishlists extends Model { }

// creating new Whislist instance; 
Wishlists.init(
  {
    id: {
      // type: DataTypes.INTEGER,
      type: DataTypes.UUID,
      // autoIncrement: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    wishlist_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
        len: [5]
      }
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
