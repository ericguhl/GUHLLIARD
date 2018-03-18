// reqiure experss
var express = require('express');
var path = require('path');

// create router object
var router = express.Router();

// export our Router
module.exports = router;

// route for homepage
router.get('/', function(req, res) {
  res.render('pages/index');
  // res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

// route for rudiments
router.get('/rudiments', function(req, res) {
  res.render('pages/rudiments');
});

// route for almanacs
router.get('/shufflealmanac', function(req, res) {
  res.render('pages/shufflealmanac');
});

router.get('/shapesalmanac', function(req, res) {
  res.render('pages/shapesalmanac');
});

router.get('/hiphopalmanac', function(req, res) {
  res.render('pages/hiphopalmanac');
});

// route for advanced
router.get('/advanced', function(req, res) {
  res.render('pages/advanced');
});

// route for about
router.get('/about', function(req, res) {
  res.render('pages/about');
});

// route for advanced
router.get('/inspiration', function(req, res) {
  res.render('pages/inspiration');
});
