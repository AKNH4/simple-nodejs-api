const express = require("express");
const database = require("./database/database");
const { CreateProduct } = require("./products/entities/product");

require("dotenv").config({
  path: "../.env",
});

(async () => {
  CreateProduct(database);
  await database.authenticate();
  await database.sync();
})();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use("/products", require("./products/routes"));

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server listening on port ${PORT}`)
);
