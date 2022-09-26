const { DataTypes } = require('sequelize');
const sequelize = require('../database');

module.exports = sequelize.define('department', {
    code: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    budget: {
        type: DataTypes.FLOAT
    }
},
{
    timestamps: false,
    createdAt: false,
    updatedAt: false
});