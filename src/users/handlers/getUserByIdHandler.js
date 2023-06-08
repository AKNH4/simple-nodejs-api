const { Users } = require("../entities/user");

module.exports = async (req, res) => {
  const user = await Users.findOne({ email: req.query.email });

  if (!user) return res.sendStatus(404);

  //   return res.json(user);
  return res.json(req.user);
};
