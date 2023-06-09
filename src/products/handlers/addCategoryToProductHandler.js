const { Categories } = require("../entities/category");
const { Products } = require("../entities/product");
const { ProductCategories } = require("../entities/productCategories");
const mapCategoriesResponse = require("../mappers/mapCategoriesResponse");

module.exports = async (req, res) => {
  const { product_id, category_id } = req.params;

  console.log(product_id, category_id);
  try {
    await ProductCategories.create({
      productId: product_id,
      categoryId: category_id,
    });
  } catch (e) {
    return res.status(400).json({
      error: "The product already has the category",
    });
  }

  const product = await Products.findByPk(product_id, {
    include: [Categories],
  });

  return res.json(mapCategoriesResponse(product.categories));
};
