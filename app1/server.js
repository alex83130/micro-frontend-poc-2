const express = require('express');
const cors = require('cors');
const path = require('path');
const orders = require('./data');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();
app.use(cors());

app.get('/api/orders', (req, res) => {
  res.json({ orders });
});

console.log('server', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
