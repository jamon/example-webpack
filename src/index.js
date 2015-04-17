// entry point
define(['./components/account/account', './components/customer/customer', 'external/react'], function(Account, Customer, React) {
    return {
        Test: function(props, target) {
            React.render(React.createElement(Account, props), target);
        },
        Customer: function(props, target) {
            React.render(React.createElement(Customer, props), target);
        }
    };
});
