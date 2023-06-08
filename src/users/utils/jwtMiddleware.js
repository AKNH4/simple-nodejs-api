const verifyJwt = require("./verifyJwt");
const { Users } = require("../entities/user");

module.exports = async (req, res, next) => {
  const authorizationHeader = req.headers?.authorization?.split(" ")[1];

  if (!authorizationHeader) return res.status(401).send("Token missing");

  const [success, decodedTokenOrErrorMessage] = await verifyJwt(
    authorizationHeader
  );

  if (!success) return res.status(401).send(decodedTokenOrErrorMessage);

  const { sub } = decodedTokenOrErrorMessage;

  const user = await Users.findByPk(sub);

  req.user = { ...user.dataValues, password: undefined };

  next();
};
