const express = require("express");
const getUserByIdHandler = require("./handlers/getUserByIdHandler");
const signupHandler = require("./handlers/signupHandler");
const loginHandler = require("./handlers/loginHandler");
const jwtMiddleware = require("./utils/jwtMiddleware");
const roleMiddleware = require("./utils/roleMiddleware");

const router = express.Router();

router.get("/", jwtMiddleware, roleMiddleware("ADMIN"), getUserByIdHandler);

router.post("/signup", signupHandler);

router.post("/login", loginHandler);

module.exports = router;
