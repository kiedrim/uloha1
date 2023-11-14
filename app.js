const express = require('express');
const config = require('./config/config'); 
const trackRoute = require('./routes/track.routes');
const countRoute= require('./routes/count.routes');
const bodyParser = require('body-parser');
const redisClient = require('./config/dbconfig');

const app = express();

app.use(bodyParser.json());

app.use('/track', trackRoute);
app.use('/count', (req, res, next) => {
  countRoute(req, res, next); 
});

redisClient.on('error', err => {
  console.log('Error connecting to Redis', err);
});

redisClient.on('connect', function()  {
  console.log('Connected to Redis');

});
redisClient.connect();

app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}`); 
});