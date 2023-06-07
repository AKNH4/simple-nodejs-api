const express = require("express");
const { Products } = require("./entities/product");
const router = express.Router();
const { ValidationError } = require("sequelize");
const { mapSequelizeError } = require("../utils/sequelizeErrorMapper");

router.get("/", async (req, res) => {
  const products = await Products.findAll();
  return res.json(products);
});

router.get("/:id", async (req, res) => {
  const product = await Products.findByPk(req.params.id);
  if (!product) return res.sendStatus(404);

  return res.json(product);
});

router.post("/", async (req, res) => {
  try {
    const newProduct = await Products.create({ ...req.body, id: undefined });
    return res.status(201).send(newProduct.id);
  } catch (e) {
    if (e instanceof ValidationError) {
      return res.json(mapSequelizeError(e));
    }
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Products.findByPk(id);
  if (!product) return res.status(404);

  await product.update({ ...req.body });
  return res.status(200).send(product.id);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Products.findByPk(id);
  await product.destroy();

  return res.status(200).send(product.id);
});

module.exports = router;
