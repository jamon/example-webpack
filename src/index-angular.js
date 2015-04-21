define(['external/angular', 'external/react',  './components/account/account', './components/customer/customer', 'external/ngReact'], function(angular, React, Account, Customer) {
    var module = angular.module('exampleApplication', ['react']);

    module.value('Example', Account);

    module.directive('example', ['reactDirective', function(reactDirective) {
        return reactDirective('Example', []);
    }]);

    module.value('Customer', Customer);
    module.directive('customer', ['reactDirective', function(reactDirective) {
        return reactDirective('Customer', []);
    }]);
});


