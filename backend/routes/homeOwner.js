const express = require('express');
const app = express.Router();

app.get('/', (req, res) => {
  res.send('Home owner');
});

module.exports = app;