const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { SERVER_PORT, MONGO_DB } = require('./config');
const { homeOwnerRoutes, homeRoutes } = require('./routes');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/home', homeRoutes);
app.use('/api/homeowner', homeOwnerRoutes);

app.listen(SERVER_PORT, () => {
  console.log(
    `Express server puerto ${SERVER_PORT}: \x1b[32m%s\x1b[0m`,
    'online'
  );
});
