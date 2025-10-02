const express = require("express");
const app = express();
const port = 3000;

app.get("/Saludo", (req, res) => {
  res.send("Bienvenidos");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
