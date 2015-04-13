// entry point
define(['external/react', './message', './model/message'], function(React, Message, MessageModel) {
    return React.createClass({
        displayName: 'example/test',
        getInitialState: function() {
            return {
                loading: true,
                message: null
            };
        },
        componentDidMount: function() {
            MessageModel.getMessage(function(message) {
                this.setState({loading: false, message: message});
            }.bind(this));
        },
        render: function() {
            return <div>
                <h1>Hello World</h1>
                {this.state.loading ? <div>loading...</div> : <Message message={this.state.message} />}
            </div>;
        }
    });
});
