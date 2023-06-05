const express = require("express");

require("dotenv").config({
  path: "./.env",
});

const PORT = process.env.PORT;

const app = express();

app.get("*", (req, res) => res.send("🍕"));

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server listening on port ${PORT}`)
);
