
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var serverPort =  3000;

app.use(express.static(__dirname + '/../client/'));

app.get('/', sayHi);
app.get('/*', notFound);

function sayHi(req, res) {
  res.status(200).send('Hola que tal...');
}

function notFound(req, res) {
  send404(req, res, 'API endpoint not found');
}

function send404(req, res, description) {
  var data = {
    status: 404,
    message: 'Not Found',
    description: description,
    url: req.url
  };
  res.status(404).send(data);
}

app.listen(serverPort,function () {
  console.log('Listen on port ' + serverPort);
});
