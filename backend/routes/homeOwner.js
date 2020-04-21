const express = require('express');
const app = express.Router();
const HomeOwner = require('../models/homeOwner');

app.get('/', (req, res, next) => {
  
  HomeOwner.find({})
    .exec((err, homeOwners) => {
      if(err){
        res.status(500).json({
          message: 'Error loading home owners',
          error: err
        })
      } else {
        res.status(200).json({
          homeOwners
        });
      }
    })
  
});

module.exports = app;