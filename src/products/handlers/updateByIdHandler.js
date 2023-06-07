const { Products } = require("../entities/product");

module.exports = async (req, res) => {
  const { id } = req.params;
  const product = await Products.findByPk(id);
  if (!product) return res.status(404);

  await product.update({ ...req.body });
  return res.status(200).send(product.id);
};
