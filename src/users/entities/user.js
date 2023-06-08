const { Model, UUID, UUIDV4, STRING, ENUM } = require("sequelize");
const database = require("../../database/database");

class Users extends Model {}

function registerUsers(sequelize) {
  Users.init(
    {
      id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      email: {
        type: STRING,
        unique: {
          msg: "Email does already exist",
        },
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Email must be an email",
          },
          notNull: {
            msg: "Email missing",
          },
        },
      },
      password: {
        type: STRING,
        allowNull: false,
      },
      role: {
        type: ENUM("USER", "ADMIN"),
        allowNull: false,
        defaultValue: "USER",
      },
    },
    { sequelize, tableName: "users", updatedAt: false }
  );
}

module.exports = { registerUsers, Users };
