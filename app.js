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
  console.log('Chyba připojení k Redisu', err);
});

redisClient.on('connect', function()  {
  console.log('Připojeno k Redisu');

});
redisClient.connect();

app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}`); 
});












/*
const express = require("express");
const fs = require("fs");
const redis = require("redis");
const bodyParser = require('body-parser');
const { ok } = require("assert");


const client = redis.createClient();

const app = express();
const PORT = 8080;

client.on('error', err => {
    console.log('Chyba připojení k Redisu', err);
  });
  
  client.on('connect', function()  {
    console.log('Připojeno k Redisu');

  });
  client.connect();
  
// Parse request body
app.use(bodyParser.json()); 

// Route for POST /track
app.post('/track', (req, res) => {

  const data = req.body;
  try {
    fs.appendFile('data.json', JSON.stringify(data), err => {
      if (err) return res.status(500).send(err);
      
      if (data.count) {
        client.incrBy('count', data.count, redisErr => {
        if (redisErr) return res.status(500).send(redisErr);
        res.send('Data tracked successfully');
      });
    } else {
      res.send('Data tracked successfully');  
    }
    res.sendStatus(200);
  });
} catch (error) {
  res.status(500).send("Failed to save data" + err)
}
});


// D O N E
// Route for GET /count 
app.get('/count',async (req, res) => {
  try {
    const count = await client.get('count');
    res.send(count);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`); 
});

*/

