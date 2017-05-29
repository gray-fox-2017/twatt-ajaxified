const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send("Our site is alive, yeay..");
});

module.exports = router;
