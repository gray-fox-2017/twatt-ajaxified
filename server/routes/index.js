const express = require('express');
const router = express.Router();
const Twitter = require('../controllers/twitter');

//router.get('/', (req,res) => {
//  res.send('Welcome to the simplest twitter api ever');
//});

router.post('/search', Twitter.search);

router.get('/', Twitter.userTimeline);

router.post('/newStatus', Twitter.createStatus);

module.exports = router;
