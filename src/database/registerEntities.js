const { registerProducts, Products } = require("../products/entities/product");
const { registerUsers } = require("../users/entities/user");
const {
  registerCategories,
  Categories,
} = require("../products/entities/category");
const {
  registerProductCategories,
  ProductCategories,
} = require("../products/entities/productCategories");

module.exports = (database) => {
  registerProducts(database);
  registerUsers(database);
  registerCategories(database);
  registerProductCategories(database);

  Products.belongsToMany(Categories, { through: ProductCategories });
  Categories.belongsToMany(Products, { through: ProductCategories });
};
