const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const api = express();

const router = require('./router');

api.use(bodyParser.urlencoded({ extended: true }));
api.use(expressValidator());

api.use(router);

module.exports = api;
