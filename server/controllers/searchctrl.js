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

var findSomething = function(req, res) {
  let search = req.body.search;
  search = encodeURIComponent(search).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
  // console.log(req.body)
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${search}`,
    process.env.USER_TOKEN,
    process.env.USER_SEC,
    function (e, data){
      if(e) {
        res.send(e)
      } else {
        res.send(data)
      }
    })
}

module.exports = {
  findSomething
};