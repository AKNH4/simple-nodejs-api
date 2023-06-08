const { compare } = require("bcrypt");

module.exports = async (password, hashedPassword) =>
  await compare(password, hashedPassword);
