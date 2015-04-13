// entry point
define(['external/react', './message'], function(React, Message) {
    return React.createClass({
        displayName: 'example/test',
        getInitialState: function() {
            return {
                loading: true,
                message: null
            };
        },
        componentDidMount: function() {
            // @TODO use a model class
            var that = this;
            var req = new XMLHttpRequest();
            req.onload = function() {
                var response = JSON.parse(this.responseText);
                setTimeout(function() {
                    that.setState({loading: false, message: response.message});
                }, 1000);
            };
            req.open("get", "/api/example/1/test");
            req.send();
        },
        render: function() {
            return <div>
                <h1>Hello World</h1>
                {this.state.loading ? <div>loading...</div> : <Message message={this.state.message} />}
            </div>;
        }
    });
});
