"use strict";
const express = require("express");

const router = express.Router();

const products = new Map();

products.set(0, {
  id: 0,
  name: "bottle",
  price: 2.99,
  quantity_available: 100,
});

function getProducts() {
  const toReturn = [];
  for (let product of products.values()) {
    toReturn.push(product);
  }

  return toReturn;
}

router.get("/", (req, res) => {
  console.log(products.values());

  return res.json(getProducts());
});

router.post("/", (req, res) => {
  const id = Date.now();
  const product = { ...req.body, id };
  products.set(id, product);

  return res.json(product).status(201);
});

router.put("/:id", (req, res) => {
  const id = Number.parseInt(req.params.id);

  if (!products.has(id)) return res.sendStatus(400);

  const product = products.get(id);
  const newProd = { ...product, ...req.body };

  products.set(product.id, newProd);

  return res.sendStatus(204);
});

router.delete("/:id", (req, res) => {
  const id = Number.parseInt(req.params.id);

  if (!products.has(id)) return res.sendStatus(400);

  products.delete(id);

  return res.sendStatus(204);
});

module.exports = router;
