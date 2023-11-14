const express = require('express');
const router = express.Router();
const { getCount } = require('../controllers/count.controller');


router.get('/', getCount);

module.exports = router;