const { UUID, UUIDV4, STRING, INTEGER, Model, FLOAT } = require("sequelize");

class Categories extends Model {}

function registerCategories(sequelize) {
  Categories.init(
    {
      id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      name: {
        type: STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      tableName: "categories",
      createdAt: false,
      updatedAt: false,
      modelName: "categories",
    }
  );
}

module.exports = { registerCategories, Categories };
