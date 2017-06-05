const Twitter = require('../models/twitter');


const getTimeline = (req,res) => {
  Twitter.getTimeline(req,res)
}

const getSearch = (req,res) => {
  Twitter.getSearch(req,res);
}

const postTweet = (req,res) => {
  Twitter.postTweet(req,res)
}

module.exports = {
  getTimeline,
  getSearch,
  postTweet
}