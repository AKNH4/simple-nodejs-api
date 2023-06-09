module.exports = class ContactInfoResponse {
  constructor(id, phoneNumbers, address) {
    this.id = id;
    this.phoneNumbers = phoneNumbers;
    this.address = address;
  }
  id;
  phoneNumbers;
  address;
};
