(function () {
    "use strict";

    var injectedParams = ["CustomersService", "$routeParams", "$location"],
        CustomerFormController = function (CustomersService, $routeParams, $location) {
            var vm = this;

            vm.customer = {};
            vm.save = save;
            vm.title = "";

            init();

            /**
             * Load the data needed and prepare some variables
             */
            function init() {
                vm.title = $routeParams.id ? "Edit customer" : "New customer";

                if ($routeParams.id) {
                    CustomersService.getById($routeParams.id).then(applyCustomer);
                }
            }

            /**
             * Apply the given customer to the scope
             * @param   {Object}   customer
             * @returns {Object}   customer
             */
            function applyCustomer(customer) {
                vm.customer = customer;

                return customer;
            }

            /**
             * Redirect to Customer list
             */
            function redirect() {
                $location.url("/");
            }

            /**
             * Saves the given customer
             * @param {Object} customer
             */
            function save(customer) {
                if ($routeParams.id) {
                    CustomersService.update(customer).then(redirect);
                } else {
                    CustomersService.insert(customer).then(redirect);
                }
            }
        };

    CustomerFormController.$inject = injectedParams;
    angular.module("customersApp").controller("CustomerFormController", CustomerFormController);

}());
