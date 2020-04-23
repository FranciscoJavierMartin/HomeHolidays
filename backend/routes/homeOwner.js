const express = require('express');
const app = express.Router();
const HomeOwner = require('../models/homeOwner');

app.get('/', (req, res, next) => {
  HomeOwner.find().exec((err, homeOwners) => {
    if (err) {
      res.status(500).json({
        message: 'Error loading home owners',
        error: err,
      });
    } else {
      res.status(200).json({
        homeOwners,
      });
    }
  });
});

app.get('/:id', (req, res) => {
  const { id } = req.params;

  HomeOwner.find({ _id: id }, (err, homeOwner) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else if (!homeOwners) {
      res.status(400).json({
        error: { message: 'Home owner not found' },
      });
    } else {
      res.status(200).json({
        homeOwner,
      });
    }
  });
});

module.exports = app;
