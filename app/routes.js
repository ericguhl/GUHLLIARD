// reqiure experss
var express = require('express');
var path = require('path');

// create router object
var router = express.Router();

// export our Router
module.exports = router;

// route for homepage
router.get('/', function(req, res) {
  res.status(200).render('pages/index');
  // res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

// route for rudiments
router.get('/rudiments', function(req, res) {
  res.status(200).render('pages/rudiments');
});

// route for almanac
router.get('/almanac', function(req, res) {
  res.status(200).render('pages/almanac');
});

// route for advanced
router.get('/advanced', function(req, res) {
  res.status(200).render('pages/advanced');
});

// route for about
router.get('/about', function(req, res) {
  res.status(200).render('pages/about');
});

// route for advanced
router.get('/inspiration', function(req, res) {
  res.status(200).render('pages/inspiration');
});
