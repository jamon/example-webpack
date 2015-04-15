define(['external/react'], function(React) {
    return React.createClass({
        displayName: 'example/loading',
        render: function() {
            var loadingStyle = {
                display: this.props.loading ? "block" : "none"
            };
            var contentStyle = {
                display: this.props.loading ? "none" : "block"
            };

            return <div>
                <div style={loadingStyle}>loading...</div>
                <div ref="content" style={contentStyle}>{this.props.children}</div>
            </div>;
        }
    });
});
