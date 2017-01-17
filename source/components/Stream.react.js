var React = require('react');
var SnapkiteStreamClient = require('snapkite-stream-client');
var StreamTweet = require('./StreamTweet.react');
var Header = require('./Header.react');

var Stream = React.createClass({

    getInitialState: function () {
        return {
            tweet: null
        };
    },

    componentDidMount: function () {

        SnapkiteStreamClient.initializeStream(this.handleNewTweet);
    },

    componentWillUnmount: function () {
        SnapkiteStreamClient.destroyStream();
    },

    handleNewTweet: function (tweet) {
        console.log("TWEET IS #############" );
        this.setState({
            tweet: tweet
        });
    },

    render: function () {
        var tweet = this.state.tweet;

    /*    if (tweet) {
            return (
                <StreamTweet
                    tweet={tweet}
                    onAddTweetToCollection={this.props.onAddTweetToCollection} />
            );
        }*/

        return (
            <div>

                <StreamTweet
                    tweet={tweet}
                    onAddTweetToCollection={this.props.onAddTweetToCollection} />
            </div>
        );
    }
});

module.exports = Stream;