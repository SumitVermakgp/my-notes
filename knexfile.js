const dotenv = require("dotenv").config();

var options = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },

    pool: {
      min: 2,
      max: 10,
    },

    migrations: {
      directory: `${__dirname}/migrations`,
    },

    seeds: {
      directory: `${__dirname}/seeds`,
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,

    pool: {
      min: 2,
      max: 10,
    },

    migrations: {
      tableName: "knex_migrations",
    },
  },
};

var environment = process.env.NODE_ENV || "development";
var config = options[environment];
module.exports = config;