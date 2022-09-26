'use strict';

const app = require('../app');
const sequelize = require('../database');
const config = require('config');

async function main() {
    try {
        await sequelize.sync();
        app.listen(config.get('server.port'), () => {
            console.log('App running in port: ' + config.get('server.port'));
        });
    } catch (error) {
        console.error;
    }
}

main();
