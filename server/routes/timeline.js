var timelinectrl = require('../controllers/timelinectrl')

var express = require('express');
var router = express.Router();

router.get('/', timelinectrl.getHome)
router.get('/timeline/:username', timelinectrl.getUserTimeline)

module.exports = router;