// entry point
define(['./test', './message', 'external/react'], function(Test, Message, React) {
    return {
        Test: function(props, target) {
            React.render(React.createElement(Test, props), target);
        },
        Message: function(props, target) {
            React.render(React.createElement(Message, props), target);
        }
    };
});
