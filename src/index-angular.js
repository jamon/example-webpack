define(['external/angular', 'external/react',  './components/account/account', './components/customer/customer', 'external/ngReact'],
        function(angular, React, Account, Customer) {
    var module = angular.module('exampleApplication', ['react']);

    module.value('Example', Account);

    module.directive('example', ['reactDirective', function(reactDirective) {
        return reactDirective('Example', ["accountNumber"]);
    }]);

    module.value('Customer', Customer);
    module.directive('customer', ['reactDirective', function(reactDirective) {
        return reactDirective('Customer', ["accountNumber"]);
    }]);

    module.controller('exampleCtrl', ['$scope', function($scope) {
        $scope.accountNumber = $scope.selectedAccountNumber = "1234567890123456";
        $scope.searchAccount = function() {
            $scope.selectedAccountNumber = $scope.accountNumber;
            console.log("updating selected Account", $scope.selectedAccountNumber);
        };
    }]);
});
