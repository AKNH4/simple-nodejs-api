const { ValidationError } = require("sequelize");
const { mapSequelizeErrors } = require("../../utils/sequelizeErrorMapper");
const { Addresses } = require("../entities/addresses");
const { ContactInfos } = require("../entities/contactInfos");
const mapToAddressResponse = require("../mappers/mapToAddressResponse");

module.exports = async (req, res) => {
  const { postCode, city, country } = req.body;

  const userId = req.user.id;
  const userContactInfo = await ContactInfos.findOne({ where: { userId } });

  console.log(userContactInfo.dataValues);

  try {
    var newAddress = await Addresses.create({
      contactInfoId: userContactInfo.id,
      postCode,
      city,
      country,
    });
  } catch (e) {
    if (e instanceof ValidationError) {
      return res.status(400).json(mapSequelizeErrors(e));
    }
  }

  return res.status(201).json(mapToAddressResponse(newAddress.dataValues));
};
