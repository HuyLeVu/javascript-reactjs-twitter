var React = require('react');
var SnapkiteStreamClient = require('snapkite-stream-client');
var StreamTweet = require('./StreamTweet.react');
var Header = require('./Header.react');
var TweetStore = require('../stores/TweetStore');

var Stream = React.createClass({

    getInitialState: function () {
        console.log("Stream : 1) get Initial state");
        return {
            tweet: TweetStore.getTweet()
        };
    },

    render: function () {

        var tweet = this.state.tweet;
        console.log("Stream : 3) Render called ",tweet);
        if (tweet) {

            return (
                <StreamTweet
                    tweet={tweet}
                    onAddTweetToCollection={this.props.onAddTweetToCollection} />
            );
        }

        return (
            <Header text="Waiting for public photos from Twitter..." />
        );
    }
});

module.exports = Stream;