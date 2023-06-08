const hashPassword = require("../utils/hashPassword");
const { mapSequelizeErrors } = require("../../utils/sequelizeErrorMapper");
const { Users } = require("../entities/user");
const { ValidationError } = require("sequelize");
const createJwt = require("../utils/createJwt");
const mapUser = require("../utils/mapUser");

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;

  if (!password?.match(passwordRegex))
    return res.status(400).json({
      error: "Password must be a valid Password",
    });

  const hashedPassword = await hashPassword(password);
  // console.log(email, password);

  try {
    const newUser = await Users.create({
      email,
      password: hashedPassword,
    });

    const token = createJwt(mapUser(newUser), newUser.id);

    return res.json({ token });
  } catch (e) {
    if (e instanceof ValidationError) {
      return res.json(mapSequelizeErrors(e));
    }
  }
};
