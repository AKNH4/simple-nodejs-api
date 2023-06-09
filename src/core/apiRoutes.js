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
    signup: "/auth/signup",
    login: "/auth/login",
    addPhoneNumber: "/users/me/contacts/phonenumber",
    addAddress: "/users/me/contacts/address",
    getContactInfo: "/users/me/contacts",
  },
};
