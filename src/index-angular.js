define(['external/react', 'external/angular',  './test', 'external/ngReact'], function(React, angular, Test) {
    var module = angular.module('exampleApplication', ['react']);
    module.value('Example', Test);
    module.directive('example', ['reactDirective', function(reactDirective) {
        return reactDirective('Example', []);
    }]);
});
