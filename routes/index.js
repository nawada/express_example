'use strict';
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/file', (req, res, next) => {
  // image from https://flic.kr/p/EfXzz3 cc0
  const rs = fs.createReadStream(path.join(__dirname, '../public/images/thirst.jpg'));
  let data = [];
  rs.on('data', (c) => {
    data.push(c);
  });
  rs.on('end', () => {
    const buf = Buffer.concat(data);
    res.send({'base64': buf.toString('base64')});
  });
});

module.exports = router;
