const { Products } = require("../entities/product");
const { mapSequelizeError } = require("../../utils/sequelizeErrorMapper");
const { ValidationError } = require("sequelize");

module.exports = async (req, res) => {
  try {
    const newProduct = await Products.create({ ...req.body, id: undefined });
    return res.status(201).send(newProduct.id);
  } catch (e) {
    if (e instanceof ValidationError) {
      return res.json(mapSequelizeError(e));
    }
  }
};
