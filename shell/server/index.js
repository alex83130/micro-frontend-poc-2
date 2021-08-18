const express = require("express");
const orders = require("./data");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/orders", (req, res) => {
  res.json({ orders });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
