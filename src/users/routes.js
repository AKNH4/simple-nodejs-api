const express = require("express");
const getUserByIdHandler = require("./handlers/getUserByIdHandler");
const signupHandler = require("./handlers/signupHandler");
const loginHandler = require("./handlers/loginHandler");
const jwtMiddleware = require("./utils/jwtMiddleware");
const roleMiddleware = require("./utils/roleMiddleware");
const apiRoutes = require("../core/apiRoutes");

const router = express.Router();

router.get(
  apiRoutes.users.getUser,
  jwtMiddleware,
  roleMiddleware("ADMIN"),
  getUserByIdHandler
);

router.post(apiRoutes.users.signup, signupHandler);

router.post(apiRoutes.users.login, loginHandler);

module.exports = router;
