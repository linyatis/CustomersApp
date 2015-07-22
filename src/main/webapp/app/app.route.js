(function () {
    "use strict";

    angular.module("customersApp").config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CustomersController as vm',
                templateUrl: 'app/customers/list.html'
            })
            .when('/customers/new', {
                controller: 'CustomerFormController as vm',
                templateUrl: 'app/customers/form.html'
            })
            .when('/customers/:id/edit', {
                controller: 'CustomerFormController as vm',
                templateUrl: 'app/customers/form.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

}());
