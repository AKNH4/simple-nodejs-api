const { Model, UUID, UUIDV4, STRING } = require("sequelize");

class Addresses extends Model {}

function registerAddresses(sequelize) {
  Addresses.init(
    {
      id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      postCode: {
        type: STRING,
        allowNull: false,
        field: "post_code",
        validate: {
          notEmpty: true,
        },
      },
      city: {
        type: STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      country: {
        type: STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      createdAt: true,
      updatedAt: false,
      tableName: "addresses",
      modelName: "address",
    }
  );
}

module.exports = { registerAddresses, Addresses };
