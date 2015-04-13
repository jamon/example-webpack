// entry point
define(['external/react'], function(React) {
    return React.createClass({
        displayName: 'example/message',
        render: function() {
            return <div>Message: {this.props.message}</div>;
        }
    });
});
