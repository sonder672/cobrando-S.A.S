'use strict';

const app = require('../app');
const sequelize = require('../database');
const config = require('config');

async function main() {
    await sequelize.sync({force: false});
    app.listen(config.get('server.port'), () => {
        console.log('App running in port: ' + config.get('server.port'));
    });
}
  
main();