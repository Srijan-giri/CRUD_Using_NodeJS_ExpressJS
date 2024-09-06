require('dotenv').config(); // load environment variables from .env

module.exports = {
    development: {
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'password',
        database: process.env.DB_NAME || 'crud_dev',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: 'mysql',
    }
    // test: {
    //     username: process.env.DB_USER || 'root',
    //     password: process.env.DB_PASS || null,
    //     database: process.env.DB_NAME || 'crud_test',
    //     host: process.env.DB_HOST || '127.0.0.1',
    //     dialect: 'mysql',
    // },
    // production: {
    //     username: process.env.DB_USER || 'root',
    //     password: process.env.DB_PASS || null,
    //     database: process.env.DB_NAME || 'crud_prod',
    //     host: process.env.DB_HOST || '127.0.0.1',
    //     dialect: 'mysql',
    // },
};
