const { mapSequelizeErrors } = require("../../utils/sequelizeErrorMapper");
const { ContactInfos } = require("../entities/contactInfos");
const { PhoneNumbers } = require("../entities/phoneNumbers");
const { ValidationError } = require("sequelize");
const mapToPhoneNumberResponse = require("../mappers/mapToPhoneNumberResponse");

module.exports = async (req, res) => {
  const { phonenumber } = req.body;

  const userId = req.user.id;

  const contactInfo = await ContactInfos.findOne({
    where: { userId },
  });

  const doesPhoneNumberExists = await PhoneNumbers.findOne({
    where: { phonenumber, contactInfoId: contactInfo.id },
  });

  if (doesPhoneNumberExists)
    return res.status(400).json({
      error: "Phonenumber does already exist",
    });

  try {
    var newPhoneNumber = await PhoneNumbers.create({
      contactInfoId: contactInfo.dataValues.id,
      phonenumber,
    });
  } catch (e) {
    if (e instanceof ValidationError) {
      return res.json(mapSequelizeErrors(e));
    }
  }

  return res
    .status(201)
    .json(mapToPhoneNumberResponse(newPhoneNumber.dataValues));
};
