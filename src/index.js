const express = require("express");
const database = require("./database/database");
const { registerProducts } = require("./products/entities/product");
const { registerUsers } = require("./users/entities/user");

require("dotenv").config({
  path: "dev.env",
});

(async () => {
  registerProducts(database);
  registerUsers(database);
  await database.authenticate();
  await database.sync();
})();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use("/products", require("./products/routes"));
app.use("/users", require("./users/routes"));

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server listening on port ${PORT}`)
);
