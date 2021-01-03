// placeholder for potential future functionality developments
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Purchased extends Model {}

Purchased.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    wishlist_id: {
      type: DataTypes.UUID,
      references: {
        model: 'wishlists',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'purchased'
  }
);

module.exports = Purchased;
