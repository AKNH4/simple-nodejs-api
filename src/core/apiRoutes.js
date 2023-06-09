module.exports = {
  products: {
    getAll: "/products",
    getById: "/products/:id",
    post: "/products",
    updateById: "/products/:id",
    deletebyId: "/products/:id",
    addCategory: "/products/:product_id/:category_id",
  },
  categories: {
    post: "/categories",
  },
  users: {
    getUser: "/users",
    signup: "/signup",
    login: "/login",
  },
};
