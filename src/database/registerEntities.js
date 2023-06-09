const { registerProducts, Products } = require("../products/entities/product");
const { registerUsers } = require("../users/entities/user");
const {
  registerCategories,
  Categories,
} = require("../products/entities/category");

module.exports = (database) => {
  registerProducts(database);
  registerUsers(database);
  registerCategories(database);

  Products.hasMany(Categories);
  Categories.belongsTo(Products);
};
