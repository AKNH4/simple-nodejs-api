const { Products } = require("../entities/product");

module.exports = async (req, res) => {
  const products = await Products.findAll();
  return res.json(products);
};
