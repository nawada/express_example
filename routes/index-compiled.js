'use strict';

var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/file', function (req, res, next) {
  // image from https://flic.kr/p/EfXzz3 cc0
  var rs = fs.createReadStream(path.join(__dirname, '../public/images/thirst.jpg'));
  var data = [];
  rs.on('data', function (c) {
    data.push(c);
  });
  rs.on('end', function () {
    var buf = Buffer.concat(data);
    res.send({ 'base64': buf.toString('base64') });
  });
});

module.exports = router;

//# sourceMappingURL=index-compiled.js.map