var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('craft', { title: 'Sunny Mistry - Craft' });
});

module.exports = router;
