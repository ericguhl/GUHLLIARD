var express = require('express');
// var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 8080;

// use ejs and express layouts
app.set('view engine', 'ejs');
// app.use(expressLayouts);

// route our app
var router = require('./app/routes');
app.use('/', router);

// set static files
app.use(express.static(__dirname + '/public'));

// start our createServer
app.listen(port, function() {
  console.log('app started');
});
