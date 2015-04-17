// entry point
define(['./components/account', 'external/react'], function(Account, React) {
    return {
        Test: function(props, target) {
            React.render(React.createElement(Account, props), target);
        }
    };
});
