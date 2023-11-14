const express = require('express');
const router = express.Router();
const { trackData } = require('../controllers/track.controller');

router.post('/', trackData); 

module.exports = router;