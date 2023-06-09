const ProductResponse = require("../dto/productResponse");

module.exports = (product) => {
  const categories = product.categories.map((c) => c.name);
  const response = new ProductResponse(
    product.id,
    product.name,
    product.price,
    categories
  );

  return response;
};
