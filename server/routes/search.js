var searchctrl = require('../controllers/searchctrl')

var express = require('express');
var router = express.Router();

router.post('/', searchctrl.findSomething)

module.exports = router;