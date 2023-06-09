const { Categories } = require("../entities/category");
const { Products } = require("../entities/product");
const mapToCategoryResponse = require("../mappers/mapToCategoryResponse");

module.exports = async (req, res) => {
  const { name } = req.body;

  const category = await Categories.create({ name });

  return res.status(201).json(mapToCategoryResponse(category.dataValues));
};
