var OAuth = require('oauth');
require('dotenv').config();

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.APP_CONS_KEY,
  process.env.APP_SEC,
  '1.0A',
  null,
  'HMAC-SHA1'
);

var postStatus = function(req, res) {
  let status = req.body.status
  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json`,
    process.env.USER_TOKEN,
    process.env.USER_SEC,
    {"status": status},
    function (e, data){
      if (e) {
        res.send(e);
      } else res.send(data)
    })
}

module.exports = {
  postStatus
};