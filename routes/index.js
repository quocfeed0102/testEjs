var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET home page. */
router.get('/index.html', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET post page. */
router.get('/post.html', function(req, res, next) {
  res.render('post', { title: 'Post' });
});
/* GET post page. */
router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'Contact' });
});
/* GET post page. */
router.get('/contact.html', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
