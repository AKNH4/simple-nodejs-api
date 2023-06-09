const { UUID, UUIDV4, STRING, INTEGER, Model, FLOAT } = require("sequelize");

class Products extends Model {}

function registerProducts(sequelize) {
  Products.init(
    {
      id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      name: {
        type: STRING,
        allowNull: false,
        validate: {
          isLowercase: {
            msg: "The product name has to be lowercase",
          },
          notEmpty: {
            msg: "Name mustn't be null",
          },
        },
      },
      price: {
        type: STRING,
        allowNull: true,
        type: FLOAT(6),
        allowNull: false,
        validate: {
          isFloat: true,
          min: 0,
        },
      },
      quantity_available: {
        type: INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: "Must be an int",
          },
          min: 0,
        },
      },
    },
    {
      sequelize,
      tableName: "products",
      createdAt: false,
      updatedAt: false,
      modelName: "products",
    }
  );
}
module.exports = { registerProducts, Products };
