var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/classes.ejs', function(req, res) {
  res.render('classes', { title: 'Express' });
});

router.get('/lectures.ejs', function(req, res) {
  res.render('lectures', { title: 'Express' });
});

router.get('/question.ejs', function(req, res) {
  res.render('question', { title: 'Express' });
});

router.get('/signup.ejs', function(req, res) {
  res.render('signup', { title: 'Express' });
});

module.exports = router;
