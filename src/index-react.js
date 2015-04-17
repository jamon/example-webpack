// entry point
define(['./components/account/account', './components/customer/customer'], function(Account, Customer) {
    return {
        Account: Account,
        Customer: Customer
    };
});
