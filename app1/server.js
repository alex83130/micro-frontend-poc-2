const express = require('express');
const cors = require('cors');
const path = require('path');
const orders = require('./data');
require('dotenv').config();

const PORT = process.env.PORT || 3003;

const app = express();
app.use(cors());

app.get('/api/orders', (req, res) => {
  res.json({ orders });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
