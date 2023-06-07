const express = require("express");
const { Products } = require("./entities/product");

const postHandler = require("./handlers/postHandler");
const getByIdHandler = require("./handlers/getByIdHandler");
const getAllHandler = require("./handlers/getAllHandler");
const updateByIdHandler = require("./handlers/updateByIdHandler");
const deleteByIdHandler = require("./handlers/deleteByIdHandler");

const router = express.Router();

router.get("/", getAllHandler);

router.get("/:id", getByIdHandler);

router.post("/", postHandler);

router.put("/:id", updateByIdHandler);

router.delete("/:id", deleteByIdHandler);

module.exports = router;
