const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const department = require('./department');

const employee = sequelize.define('employee', {
    code: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nif: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    second_surname: {
        type: DataTypes.STRING
    }
}, 
{
    timestamps: false,
    createdAt: false,
    updatedAt: false
});

department.hasMany(employee, {
    foreignKey: 'department_code',
    sourceKey: 'code'
});

employee.belongsTo(department, {
    foreignKey: 'department_code',
    targetId: 'code'
});

module.exports = employee;