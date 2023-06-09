const checkPassword = require("../utils/checkPassword");
const { Users } = require("../entities/user");
const createJwt = require("../utils/createJwt");
const mapUser = require("../utils/mapUser");
const mapToLoginResponse = require("../mappers/mapToLoginResponse");

module.exports = async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ where: { email } });
  if (!user) return res.sendStatus(401);

  const passwordMatch = await checkPassword(password, user.password);
  if (!passwordMatch) return res.sendStatus(401);

  const token = createJwt(mapUser(user), user.id);
  return res.json(mapToLoginResponse(token));
};
