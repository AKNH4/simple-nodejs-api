const { Products } = require("../entities/product");
const { Categories } = require("../entities/category");
const mapToProductResponse = require("../mappers/mapToProductResponse");

module.exports = async (req, res) => {
  const product = await Products.findByPk(req.params.id, {
    include: [Categories],
  });

  if (!product) return res.sendStatus(404);

  return res.json(mapToProductResponse(product.dataValues));
};
