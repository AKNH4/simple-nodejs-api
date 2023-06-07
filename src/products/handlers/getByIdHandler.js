const { Products } = require("../entities/product");

module.exports = async (req, res) => {
  const product = await Products.findByPk(req.params.id);
  if (!product) return res.sendStatus(404);

  return res.json(product);
};
