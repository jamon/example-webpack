define(['external/react'], function(React) {
    return React.createClass({
        displayName: 'example/message',
        render: function() {
            return <p>Message: {this.props.message}</p>;
        }
    });
});
