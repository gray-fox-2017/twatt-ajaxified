var postctrl = require('../controllers/postctrl')

var express = require('express');
var router = express.Router();

router.post('/', postctrl.postStatus)

module.exports = router;