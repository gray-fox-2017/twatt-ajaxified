require('dotenv').config();
const OAuth = require('oauth');
const helper = require('../helper/util');

const oauth = new OAuth.OAuth(
  `https://api.twitter.com/oauth/request_token`,
  `https://api.twitter.com/oauth/access_token`,
  `${process.env.TWITTER_CONSUMER_KEY}`,
  `${process.env.TWITTER_CONSUMER_SECRET}`,
  '1.0A',
  null,
  'HMAC-SHA1'
);

const getTimeline = (req,res) => {
  console.log('get timeline')
  oauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    `${process.env.TWITTER_ACCESS_TOKEN}`,
    `${process.env.TWITTER_ACCESS_TOKEN_SECRET}`,
    (err, data, result) => {
      data = JSON.parse(data);
        // console.log(data)
      // data = data.length < 0 ? 'No data' : data.map((dt)=> { return {img: dt.user.profile_image_url, created_date: dt.created_at, status: dt.text} });
      res.send(err? err :  data);
    }
  );
}

const getSearch = (req,res) => {
  let keyword = helper.fixedEncodeURIComponent(req.body.keyword);
  console.log('called'+keyword);
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${keyword}&result_type=recent&count=10`,
    `${process.env.TWITTER_ACCESS_TOKEN}`,
    `${process.env.TWITTER_ACCESS_TOKEN_SECRET}`,
    (err, data, result) => {
      if (!err) {
        data = JSON.parse(data);
        console.log(data);
        // data = data.length < 0 ? 'No data' : data.statuses.map((dt)=> { return {img: dt.user.profile_image_url, created_date: dt.created_at, status: dt.text} });
      }
      // data = data.map((dt)=> { return {img: dt.user.profile_image_url, created_date: dt.created_at, status: dt.text} });
      res.send(err? err :  data);
    }
  );
}

const postTweet = (req,res) => {

  // POST https://api.twitter.com/1.1/statuses/update.json?status=Maybe%20he%27ll%20finally%20find%20his%20keys.%20%23peterfalk
  let keyword = helper.fixedEncodeURIComponent(req.body.keyword);
  console.log(keyword);
  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json?status=${keyword}`,
    `${process.env.TWITTER_ACCESS_TOKEN}`,
    `${process.env.TWITTER_ACCESS_TOKEN_SECRET}`,
    keyword,
    'text/plain',
    (err, data) => {
      if (!err) res.send(err? err :  data);
    }
  );

}


module.exports = {
  getTimeline,
  getSearch,
  postTweet
}