const express = require("express");
const getUserByIdHandler = require("./handlers/getUserByIdHandler");
const signupHandler = require("./handlers/signupHandler");
const loginHandler = require("./handlers/loginHandler");
const jwtMiddleware = require("./utils/jwtMiddleware");
const roleMiddleware = require("./utils/roleMiddleware");
const apiRoutes = require("../core/apiRoutes");
const addPhoneNumberHandler = require("./handlers/addPhoneNumberHandler");
const addAddressHandler = require("./handlers/addAddressHandler");
const getContactInfoHandler = require("./handlers/getContactInfoHandler");

const router = express.Router();

router.get(
  apiRoutes.users.getUser,
  jwtMiddleware,
  roleMiddleware("ADMIN"),
  getUserByIdHandler
);

router.post(apiRoutes.users.signup, signupHandler);

router.post(apiRoutes.users.login, loginHandler);

router.post(
  apiRoutes.users.addPhoneNumber,
  jwtMiddleware,
  addPhoneNumberHandler
);

router.post(apiRoutes.users.addAddress, jwtMiddleware, addAddressHandler);

router.get(
  apiRoutes.users.getContactInfo,
  jwtMiddleware,
  getContactInfoHandler
);

module.exports = router;
