const { UUID, UUIDV4, STRING, DECIMAL, INTEGER, Model } = require("sequelize");
class Products extends Model {}

function CreateProduct(sequelize) {
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
      },
      price: {
        type: DECIMAL,
        allowNull: false,
      },
      quantity_available: {
        type: INTEGER,
        allowNull: false,
      },
    },
    { sequelize, tableName: "Produkte" }
  );
}
module.exports = { CreateProduct, Products };
