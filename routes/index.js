var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BackOffice de Become a Writer APP ' }
);

});

module.exports = router;
