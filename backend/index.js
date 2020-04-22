const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const feedData = require('./helper/feedData');

const { SERVER_PORT, MONGO_DB } = require('./config');
const { homeOwnerRoutes, homeRoutes } = require('./routes');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/home', homeRoutes);
app.use('/api/homeowner', homeOwnerRoutes);

mongoose.connection.openUri(MONGO_DB, (error, res) => {
  if(error){
    throw error;
  } else {
    //feedData();
  }

  console.log('Database: \x1b[32m%s\x1b[0m', 'online');
});

app.listen(SERVER_PORT, () => {
  console.log(
    `Express server port ${SERVER_PORT}: \x1b[32m%s\x1b[0m`,
    'online'
  );
});
