const { registerProducts, Products } = require("../products/entities/product");
const { registerUsers, Users } = require("../users/entities/user");
const {
  registerCategories,
  Categories,
} = require("../products/entities/category");
const {
  registerProductCategories,
  ProductCategories,
} = require("../products/entities/productCategories");
const {
  registerPhoneNumbers,
  PhoneNumbers,
} = require("../users/entities/phoneNumbers");
const {
  registerContactInfos,
  ContactInfos,
} = require("../users/entities/contactInfos");
const { registerAddresses, Addresses } = require("../users/entities/addresses");

module.exports = (database) => {
  registerProducts(database);
  registerUsers(database);
  registerCategories(database);
  registerProductCategories(database);
  registerContactInfos(database);
  registerPhoneNumbers(database);
  registerAddresses(database);

  Products.belongsToMany(Categories, { through: ProductCategories });
  Categories.belongsToMany(Products, { through: ProductCategories });

  ContactInfos.hasMany(PhoneNumbers);
  PhoneNumbers.belongsTo(ContactInfos);

  Users.hasOne(ContactInfos);
  ContactInfos.belongsTo(Users);

  ContactInfos.hasOne(Addresses);
  Addresses.belongsTo(ContactInfos);
};
