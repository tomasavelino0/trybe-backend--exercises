"use strict";
require("dotenv/config");
const config = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    database: process.env.DB_NAME || 'books_api',
    host: process.env.DB_HOST || 'localhost',
    port: 3309,
    dialect: 'mysql',
};
module.exports = config;
