const express = require('express');
const Home = require('../models/home');

const app = express.Router();

app.get('/:id', (req, res) => {
  const { id } = req.params.id;

  Home.findById(id, (err, home) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(200).json({
        home,
      });
    }
  });
});

app.post('/', (req, res) => {
  const { name, imageUrl, description, owner } = req.body;

  const home = new Home({
    name: name,
    imageUrl: imageUrl,
    description: description,
    owner: owner,
  });

  home.save((err, homeSaved) => {
    if (err) {
      console.log(err);
      res.status(400).json({
        error: err,
      });
    } else {
      res.status(201).json({});
    }
  });
});

app.delete('/:id', (req, res) => {
  const { id } = req.params.id;

  Home.findByIdAndRemove(id, (err, homeRemoved) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else if (!homeRemoved) {
      res.status(400).json({
        message: 'Home not found',
      });
    } else {
      res.status(200).json({});
    }
  });

  res.status(200).json({});
});

app.put('/:id', (req, res) => {
  const { id } = req.params.id;

  Home.findByIdAndUpdate(id, (err, homeUpdated) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else if (!homeUpdated) {
      res.status(400).json({
        message: 'Home not found',
      });
    } else {
      res.status(200).json({});
    }
  });

  res.status(200).json({});
});

module.exports = app;
