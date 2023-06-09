const { Model, UUID, UUIDV4 } = require("sequelize");

class ContactInfos extends Model {}

function registerContactInfos(sequelize) {
  ContactInfos.init(
    {
      id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
    },
    {
      sequelize,
      updatedAt: true,
      createdAt: true,
      tableName: "contactinfos",
      modelName: "contactInfo",
    }
  );
}

module.exports = { registerContactInfos, ContactInfos };
