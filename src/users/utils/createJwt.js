const { sign } = require("jsonwebtoken");

module.exports = (payload, subject) => {
  const secret = process.env.SECRET_KEY;
  const issuer = process.env.JWT_ISSUER;
  const audience = process.env.JWT_AUDIENCE;

  const jwt = sign(payload, secret, {
    issuer,
    expiresIn: "24h",
    audience,
    subject,
  });
  return jwt;
};
