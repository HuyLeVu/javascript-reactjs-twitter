var SnapkiteStreamClient = require('snapkite-stream-client');
var TweetActionCreators = require('../actions/TweetActionCreators');

function initializeStreamOfTweets() {
   TweetActionCreators.receiveTweet();
}

module.exports = {
    initializeStreamOfTweets: initializeStreamOfTweets
};