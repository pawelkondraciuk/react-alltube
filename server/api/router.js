const express = require('express');
const router = express.Router();

const AlltubeController = require('./alltubeController');
const AlltubeValidator = require('./alltubeValidator');

router.route('/search/:phrase')
  .get(AlltubeValidator.search)
  .get(AlltubeController.search);

module.exports = router;
