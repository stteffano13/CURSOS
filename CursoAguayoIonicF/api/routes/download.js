'use stric'


var express = require('express');
var DownloadController = require('../controllers/download');
var md_auth = require('../middleware/authenticated');

var api = express.Router();

api.get('/download', md_auth.ensureAuth, DownloadController.descargar);


module.exports = api;