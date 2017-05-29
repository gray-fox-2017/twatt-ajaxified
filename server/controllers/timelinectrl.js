var OAuth = require('oauth');
require('dotenv').config();

var util = require('../helpers/util')

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.APP_CONS_KEY,
  process.env.APP_SEC,
  '1.0A',
  null,
  'HMAC-SHA1'
);

var getHome = function(req, res) {
  oauth.get(
    `https://api.twitter.com/1.1/statuses/home_timeline.json`,
    process.env.USER_TOKEN,
    process.env.USER_SEC,
    function (e, data){
      if (e) {
        res.send(e);
      } else {
        res.send(data)
      }
    })
}

var getUserTimeline = function(req, res) {
  if(req.params.username !== undefined) {
    var user = req.params.username
  } else {
    var user = '';
  }
  oauth.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${user}`,
    process.env.USER_TOKEN,
    process.env.USER_SEC,
    function (e, data){
      if (e) res.send(e);
      res.send(data)
    })
}

module.exports = {
  getHome, getUserTimeline
};