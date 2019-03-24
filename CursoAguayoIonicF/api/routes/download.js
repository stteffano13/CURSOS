'use stric'


var express = require('express');
var DownloadController = require('../controllers/download');
var md_auth = require('../middleware/authenticated');

var api = express.Router();

api.post('/download',DownloadController.descargar);


module.exports = api;