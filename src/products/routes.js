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
const apiRoutes = require("../core/apiRoutes");
const addCategoryToProductHandler = require("./handlers/addCategoryToProductHandler");

const router = express.Router();

router.get(apiRoutes.products.getAll, getAllHandler);

router.get(apiRoutes.products.getById, getByIdHandler);

router.post("/", jwtMiddleware, roleMiddleware("ADMIN"), postHandler);

router.put(
  apiRoutes.products.updateById,
  jwtMiddleware,
  roleMiddleware("ADMIN"),
  updateByIdHandler
);

router.delete(
  apiRoutes.products.deletebyId,
  jwtMiddleware,
  roleMiddleware("ADMIN"),
  deleteByIdHandler
);

router.post(
  apiRoutes.products.addCategory,
  jwtMiddleware,
  // roleMiddleware("ADMIN"),
  addCategoryToProductHandler
);

router.post(apiRoutes.categories.post, jwtMiddleware, postCategoryHandler);

module.exports = router;
