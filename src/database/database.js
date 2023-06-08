const { Sequelize } = require("sequelize");

const { Model, UUID, UUIDV4, STRING, DECIMAL, INTEGER } = require("sequelize");

require("dotenv").config({
  path: "dev.env",
});

const DB_PORT = process.env.DB_PORT;
const DB_HOST = process.env.DB_HOST;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;

const database = new Sequelize({
  dialect: "mysql",
  database: DB_DATABASE,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
});
database.define;
module.exports = database;
