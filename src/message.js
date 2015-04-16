// entry point
define(['external/react', 'external/react-bootstrap'], function(React, BS) {
    return React.createClass({
        displayName: 'example/message',
        render: function() {
            return <BS.Alert><strong>Message: </strong>{this.props.message}</BS.Alert>;
        }
    });
});
