const {
  verify,
  JsonWebTokenError,
  TokenExpiredError,
} = require("jsonwebtoken");

module.exports = async (token) => {
  const secret = process.env.SECRET_KEY;

  try {
    const decodedToken = verify(token, secret);
    return [true, decodedToken];
  } catch (e) {
    if (e instanceof JsonWebTokenError) return [false, e.message];
    if (e instanceof TokenExpiredError) return [false, e.message];
  }
};
