require('dotenv').config()
const { DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE, DATABASE_HOST, DATABASE_DIALECT } = process.env;
module.exports = {
    development: {
        username: DATABASE_USERNAME,
        password: DATABASE_PASSWORD,
        database: DATABASE,
        host: DATABASE_HOST,
        dialect: "postgres",
    },
    test: {
        username: "postgres",
        password: "1234",
        database: "database_development",
        host: "127.0.0.1",
        dialect: "postgres",
    },
    production: {
        username: DATABASE_USERNAME,
        password: DATABASE_PASSWORD,
        database: DATABASE,
        host: DATABASE_HOST,
        dialect: "postgres",
    },
};
