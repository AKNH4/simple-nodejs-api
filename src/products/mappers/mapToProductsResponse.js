const ProductResponse = require("../dto/productResponse");
const ProductsResponse = require("../dto/productsResponse");
const mapCategoriesResponse = require("./mapCategoriesResponse");

module.exports = (products) => {
  const productResponses = products.map(
    (p) =>
      new ProductResponse(
        p.id,
        p.name,
        p.price,
        mapCategoriesResponse(p.categories)
      )
  );

  return new ProductsResponse(productResponses);
};
