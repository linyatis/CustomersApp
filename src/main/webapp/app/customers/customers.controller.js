(function () {
    "use strict";

    var injectedParams = ["CustomersService"],
        CustomersController = function (CustomersService) {
            var vm = this;

            vm.customers = [];
            vm.hasData = hasData;
            vm.removeCustomer = removeCustomer;


            load();

            /**
             * Load all the data needed.
             */
            function load() {
                CustomersService.list().then(function (customers) {
                    vm.customers = customers;
                });
            }

            /**
             * Deletes the given customer
             * @param {Object} customer The customer to be deleted
             */
            function removeCustomer(customer) {
                CustomersService.remove(customer.id).then(function () {
                    load();
                });
            };

            /**
             * Checks for customers.
             * @returns {Boolean} `True` if any customer.
             */
            function hasData () {
                //return (vm.customers && vm.customers.length > 0);
                return true;
            }

        };

    CustomersController.$inject = injectedParams;
    angular.module("customersApp").controller("CustomersController", CustomersController);

}());
