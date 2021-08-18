const express = require("express");
const cors = require("cors");
const orders = require("./data");

const PORT = process.env.PORT || 3003;

const app = express();
app.use(cors());

app.get("/orders", (req, res) => {
  res.json({ orders });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
