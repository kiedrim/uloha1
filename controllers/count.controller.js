const { response } = require('express');
const redisClient = require('../config/dbconfig')

 const getCount = async (req,res)=>{
    try {
        const count = await redisClient.get('count');
        res.send(count)
        res.statusCode = 200;
      } catch (err) {
        res.statusCode= 500;
        res.err = err;
      } 
}

module.exports = {
    getCount 
  }