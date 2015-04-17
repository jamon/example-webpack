define(['external/react', 'external/angular',  './components/account', 'external/ngReact'], function(React, angular, Account) {
    var module = angular.module('exampleApplication', ['react']);
    module.value('Example', Account);
    module.directive('example', ['reactDirective', function(reactDirective) {
        return reactDirective('Example', []);
    }]);
});
