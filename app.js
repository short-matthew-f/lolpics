var express = require("express");
var app = express();

// get json just fine
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

// static pages
app.use(express.static('public'));
app.use(jsonParser);

// setup array to store incoming data
var imageLinks = [];

// Routes

// main index
app.get('/', function (req, res) {
  res.sendFile('index.html');
})

// api
app.get('/image-links', jsonParser, function (req, res) {
  res.send(imageLinks);
});

app.post('/image-links', jsonParser, function (req, res) {
  imageLinks.unshift( req.body.url );
  res.send(imageLinks);
})

// server
var server = app.listen(3000, function () {
  console.log("I'm listening....");
})
