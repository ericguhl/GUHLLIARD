var express = require('express');
// var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 8080;

// use ejs and express layouts
app.set('view engine', 'ejs');
// app.use(expressLayouts);



// route our app
// var router = require('./app/routes');
// app.use('/', router);





// route for homepage
app.get('/', function(req, res) {
  res.status(200).render('pages/index');
  // res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

// route for rudiments
app.get('/rudiments', function(req, res) {
  res.status(200).render('pages/rudiments');
});

// route for almanac
app.get('/almanac', function(req, res) {
  res.status(200).render('pages/almanac');
});

// route for advanced
app.get('/advanced', function(req, res) {
  res.status(200).render('pages/advanced');
});

// route for about
app.get('/about', function(req, res) {
  res.status(200).render('pages/about');
});

// route for advanced
app.get('/inspiration', function(req, res) {
  res.status(200).render('pages/inspiration');
});




// set static files
app.use(express.static(__dirname + '/public'));

// start our createServer
app.listen(port, function() {
  console.log('app started');
});
