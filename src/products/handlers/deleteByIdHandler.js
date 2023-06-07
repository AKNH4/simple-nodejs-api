const { Products } = require("../entities/product");

module.exports = async (req, res) => {
  const { id } = req.params;
  const product = await Products.findByPk(id);
  await product.destroy();

  return res.status(200).send(product.id);
};
