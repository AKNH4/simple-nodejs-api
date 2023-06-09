const { ContactInfos } = require("../entities/contactInfos");
const { Addresses } = require("../entities/addresses");
const { PhoneNumbers } = require("../entities/phoneNumbers");
const mapToContactInfoResponse = require("../mappers/maptToContactInfoResponse");

module.exports = async (req, res) => {
  const userId = req.user.id;

  const contactInfo = await ContactInfos.findOne({
    where: { userId },
    include: [PhoneNumbers, Addresses],
  });

  return res.json(mapToContactInfoResponse(contactInfo.dataValues));
};
