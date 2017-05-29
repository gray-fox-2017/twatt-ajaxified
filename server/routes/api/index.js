const express = require('express');
const router = express.Router();
const twatt = require('../../controllers/twatt_controller');

router.get('/', twatt.index);
router.get('/search', twatt.search);
router.get('/timeline', twatt.timeline);

module.exports = router;
