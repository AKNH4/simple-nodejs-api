const { Model, UUID, UUIDV4 } = require("sequelize");

class ProductCategories extends Model {}

function registerProductCategories(sequelize) {
  ProductCategories.init(
    {
      id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
    },
    { sequelize, createdAt: true, updatedAt: false }
  );
}

module.exports = { registerProductCategories, ProductCategories };
