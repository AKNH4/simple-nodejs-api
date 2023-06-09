const mapToAddressResponse = require("./mapToAddressResponse");
const mapToPhoneNumberResponse = require("./mapToPhoneNumberResponse");

module.exports = ({ id, phonenumbers, address }) => ({
  id,
  phonenumbers: phonenumbers
    .map((phonenumber) => mapToPhoneNumberResponse(phonenumber))
    .map((p) => p.phonenumber),
  address: mapToAddressResponse(address),
});
