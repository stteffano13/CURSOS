'use strcit'


var bcrypt = require('bcrypt-nodejs');
var moment = require('moment');

var path =require('path');
var User = require('../models/user'); //importar el modelo del usuario  o lo que son las clases comunes
var jwt = require('../services/jwt');

function descargar(req, res) {
    console.log("nombre del archivo",req.body.filename);
    filepath=path.join(__dirname,'../uploads')+'/'+req.body.filename;
    res.sendFile(filepath);
}

module.exports = {          // para exportar todas las funciones de este modulo
    descargar



};