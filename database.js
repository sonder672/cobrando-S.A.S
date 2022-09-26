const Sequelize = require('sequelize');
const config = require('config');

module.exports = new Sequelize(
    config.get('db.dbname'), 
    config.get('db.username'), 
    config.get('db.password'), 
    {
        host: config.get('db.host'),
        port: config.get('db.port'),
        dialect: 'postgres'
    }
);