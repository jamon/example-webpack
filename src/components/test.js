define(['external/react', './message', './loading', '../model/message'], function(React, Message, Loading, MessageModel) {
    return React.createClass({
        displayName: 'example/test',
        getInitialState: function() {
            return {
                message: null
            };
        },
        componentDidMount: function() {
            MessageModel.getMessage(function(response) {
                this.setState({message: response.message});
            }.bind(this));
        },
        propTypes: {
            propTest: React.PropTypes.func
        },
        render: function() {
            return <div onClick={this.props.propTest}>
                <h1>Hello World</h1>
                <Loading loading={this.state.message === null}>
                    <Message message={this.state.message} />
                </Loading>
            </div>;
        }
    });
});
