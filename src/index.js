const express = require("express");
const database = require("./database/database");
const registerEntities = require("./database/registerEntities");

require("dotenv").config({
  path: "dev.env",
});

(async () => {
  registerEntities(database);
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
