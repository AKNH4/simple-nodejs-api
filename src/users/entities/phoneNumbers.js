const { Model, UUID, UUIDV4, STRING } = require("sequelize");

class PhoneNumbers extends Model {}

function registerPhoneNumbers(sequelize) {
  PhoneNumbers.init(
    {
      id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      phonenumber: {
        type: STRING(100),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      updatedAt: false,
      createdAt: true,
      tableName: "phonenumbers",
      modelName: "phonenumber",
    }
  );
}

module.exports = { registerPhoneNumbers, PhoneNumbers };
