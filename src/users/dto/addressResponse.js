module.exports = class AddressResponse {
  constructor(postCode, city, country) {
    this.postCode = postCode;
    this.city = city;
    this.country = country;
  }

  postCode;
  city;
  country;
};
