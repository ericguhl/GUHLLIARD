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

// route for almanac
router.get('/almanac', function(req, res) {
  res.render('pages/almanac');
});
