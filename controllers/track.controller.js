const fs = require("fs");
const redisClient = require('../config/dbconfig')

const trackData = (req, res) => {
    const data = req.body;
    try {

      saveDataToFile(JSON.stringify(data));

        if (data.count) {
          increaceDataInDatabase('count',data.count)
      }
      res.sendStatus(200);
    
  } catch (error) {
    res.status(500).send("Failed to track data: " + err)
  }

};

function saveDataToFile(data) {
  
  fs.appendFile('data.txt', data + "\n", err => {
    if (err) return res.status(500).send("failed to save data" + err);})

}

function increaceDataInDatabase(key, value) {
  redisClient.incrBy(key, value, redisErr => {
    if (redisErr) return res.status(500).send(redisErr);
  })
}

module.exports = {
  trackData
};