const { hash } = require("bcrypt");

module.exports = async (password) => {
  return await hash(password, 12);
};
