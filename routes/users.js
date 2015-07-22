var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/1q', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/mysql', require('../controllers/mysqlcontroller'));

module.exports = router;
