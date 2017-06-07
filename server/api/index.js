const express = require('express');
const router = express.Router();

const api = express();

const AlltubeController = require('./alltubeController');

router.get('/search/:phrase', AlltubeController.get);

api.use(router);

module.exports = api;
