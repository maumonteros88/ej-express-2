const express = require("express");
const path = require("path");
const app = express();

const port = 3000;
const dirIndex = path.join(__dirname, "index.html");

app.get("/", (req, res) => {
  res.sendFile(dirIndex);
});

app.listen(port, () => {
  console.log("Servidor corriendo...");
});
