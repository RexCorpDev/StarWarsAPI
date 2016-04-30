'use strict';

const PORT = process.env.PORT || 4000;

var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var block = require('blockchain.info')
//var http = require('http');   // sQL

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.use('/', require('./routes/index'));

//var server = http.createServer(app);    //sQL

app.listen(PORT, err =>{
  console.log(err || `Server listening on PORT ${PORT}`);
});
