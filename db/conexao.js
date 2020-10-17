const knex = require('knex');

require('dotenv/config');

const db = knex({
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    },
    migrations: {
        directory: './migrations'
    },
    useNullAsDefault: true,
});

module.exports = db;