// linking Model template and datatypes with sequelize
const { Model, DataTypes } = require('sequelize');
// linking connection
const sequelize = require('../config/connection');

// creating wishlist model
class Items extends Model { }

// creating new Whislist instance
Items.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ['^[a-zA-Z0-9_ ]+$', 'i'],
                len: [1, 25]
            }
        },
        price: {
            type: DataTypes.DECIMAL(20, 2),
            allowNull: false,
            validate: { isDecimal: true }
        },
        purchase_location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: { isUrl: true }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'items'
    }
);

module.exports = Items;
