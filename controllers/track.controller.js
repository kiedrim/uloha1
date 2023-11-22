const fs = require("fs");
const redisClient = require('../config/dbconfig')

// validation scheme
const schema = Joi.object({
  userId: Joi.number().required(),
  count: Joi.date().required()
});
 
function validate(req, res, next) {
  
  const {error} = schema.validate(req.body);
  
  if (error) {
    return res.status(400).send('Invalid request data'); 
  } else {
    next();
  }

}


const trackData = (req, res) => {
  //schema.validate(req.body);
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

async function saveDataToFile(data) {
  try {
    fs.appendFile('data.txt', data + "\n");
  }
     catch (error) {
    return res.status(500).send("failed to save data" + error);
  }

}

function increaceDataInDatabase(key, value) {
  redisClient.incrBy(key, value, redisErr => {
    if (redisErr) return res.status(500).send(redisErr);
  })
}

module.exports = {
  trackData
};