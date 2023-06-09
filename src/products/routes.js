const express = require("express");
const { Products } = require("./entities/product");

const postHandler = require("./handlers/postHandler");
const getByIdHandler = require("./handlers/getByIdHandler");
const getAllHandler = require("./handlers/getAllHandler");
const updateByIdHandler = require("./handlers/updateByIdHandler");
const deleteByIdHandler = require("./handlers/deleteByIdHandler");
const jwtMiddleware = require("../users/utils/jwtMiddleware");
const roleMiddleware = require("../users/utils/roleMiddleware");
const postCategoryHandler = require("./handlers/postCategoryHandler");

const router = express.Router();

router.get("/", getAllHandler);

router.get("/:id", getByIdHandler);

router.post("/", jwtMiddleware, roleMiddleware("ADMIN"), postHandler);

router.put("/:id", jwtMiddleware, roleMiddleware("ADMIN"), updateByIdHandler);

router.delete(
  "/:id",
  jwtMiddleware,
  roleMiddleware("ADMIN"),
  deleteByIdHandler
);

router.post(
  "/:id/category",
  jwtMiddleware,
  roleMiddleware("ADMIN"),
  postCategoryHandler
);

module.exports = router;
