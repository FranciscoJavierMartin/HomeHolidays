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

app.post('/', (req, res) => {
  const { name } = req.body;

  const homeOwner = new HomeOwner({
    name,
  });

  homeOwner.save((err, homeOwnerSaved) => {
    if (err) {
      res.status(400).json({
        error: err,
      });
    } else {
      res.status(201).json({
        homeOwner: homeOwnerSaved,
      });
    }
  });
});

app.put('/:id', (req, res) => {

  const {id } = req.params;
  const { name } = req.body;

  HomeOwner.findByIdAndUpdate(id, {name}, (err, homeOwnerUpdated) => {
    if(err){
      res.status(500).json({
        error: err,
      });
    } else if(!homeOwnerUpdated){
      res.status(400).json({
        error: {
          message: 'Home owner not found'
        }
      })
    } else {
      res.status(200).json({
        message: 'Home owner updated'
      });
    }
  });

})

module.exports = app;
