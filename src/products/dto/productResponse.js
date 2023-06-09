module.exports = class ProductResponse {
  constructor(id, name, price, categories) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.categories = categories;
  }

  id;
  name;
  price;
  categories;
};
