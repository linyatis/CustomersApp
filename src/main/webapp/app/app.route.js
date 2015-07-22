(function () {
    "use strict";

    angular.module("customersApp").config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CustomersController',
                templateUrl: 'app/customers/list.html'
            })
            .when('/customers/new', {
                controller: 'CustomerFormController',
                templateUrl: 'app/customers/form.html'
            })
            .when('/customers/:id', {
                controller: 'CustomerFormController',
                templateUrl: 'app/customers/form.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

}());
