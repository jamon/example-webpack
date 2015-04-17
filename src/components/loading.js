define(['external/react'], function(React) {
    return React.createClass({
        displayName: 'account/loading',
        render: function() {
            var loadingStyle = {
                display: this.props.loading ? "block" : "none"
            };
            var contentStyle = {
                display: this.props.loading ? "none" : "block"
            };

            return <div>
                <div style={loadingStyle}>loading account...</div>
                <div ref="content" style={contentStyle}>{this.props.children}</div>
            </div>;
        }
    });
});
