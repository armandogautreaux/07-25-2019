var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res) {
  db.User.findAll({
    include: [db.Membership]
  }).then(function(dbInfo) {
    res.json(dbInfo);
  });
});
router.post('/user/create', function(req, res) {
  db.User.create(req.body).then(function(dbInfo) {
    res.json(dbInfo);
  });
});

router.post('/membership/create', function(req, res) {
  db.Membership.create(req.body).then(function(dbInfo) {
    res.json(dbInfo);
  });
});

module.exports = router;
