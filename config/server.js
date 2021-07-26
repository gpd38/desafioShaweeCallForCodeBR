var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));

//usado para metodos
app.use(bodyParser.urlencoded({ extended: false }));

consign().include('app/routes').into(app);

module.exports = app;
