const { Products } = require("../entities/product");
const { Categories } = require("../entities/category");
const mapToProductsResponse = require("../mappers/mapToProductsResponse");

module.exports = async (req, res) => {
  const products = await Products.findAll({
    include: [Categories],
  });
  return res.json(mapToProductsResponse(products));
};
