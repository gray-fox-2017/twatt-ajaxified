const express = require('express');
const router = express.Router();
const twitter_controller = require('../controllers/twitter_controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new',twitter_controller.getTimeline);
router.post('/search',twitter_controller.getSearch);
router.post('/posting',twitter_controller.postTweet);

module.exports = router;
