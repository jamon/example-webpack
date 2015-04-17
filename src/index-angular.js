define(['external/angular', 'external/react',  './components/account/account', './components/customer/customer', 'external/ngReact'], function(angular, React, Account, Customer) {
    var module = angular.module('exampleApplication', ['react']);

    module.value('Example', Account);

    module.controller('ExampleController', ['$scope', function($scope) {
        $scope.account = {
            "accountNumber": "1234567890123456",
            "status": "ACTIVE",
            "authorizedUsers": [
                {
                    "name": "Ford Prefect",
                    "primary": "true"
                },
                {
                    "name": "Tricia McMillian",
                    "primary": "false"
                }
            ],
            "billingAddress": {
                "street1": "1 High Street",
                "street2": "",
                "city": "London",
                "state": "UK",
                "zip": "123456789"
            },
            "ppvLimit": "123.45",
            "bulkFlag": true,
            "paperlessFlag": true,
            "customer": {
                "id": "1234567890123",
                "firstName": "Arthur",
                "lastName": "Dent",
                "ssn": "123456789",
                "type": "RES",
                "employeeFlag": true,
                "primaryTelephoneNumber": "1234567890",
                "alternateTelephoneNumber": "5432109876",
                "email": "arthur.dent@hhg2tg.com",
                "securityCode": "1234"
            },
            "location": {
                "id": "12345678901234",
                "routingArea": "12345600",
                "sysPrin": "12345678",
                "agentId": "1234",
                "rateCenter": "London",
                "headend": "X1 - Not Tail End",
                "comments": "Disguised by SEP field, you need to concentrate",
                "serviceAddress": {
                    "street1": "42 High Street",
                    "street2": "",
                    "city": "London",
                    "state": "UK",
                    "zip": "123456789"
                }
            }
        };

    }]);

    module.directive('example', ['reactDirective', function(reactDirective) {
        return reactDirective('Example', ['account']);
    }]);

    module.value('Customer', Customer);
    module.directive('customer', ['reactDirective', function(reactDirective) {
        return reactDirective('Customer', []);
    }]);
});


