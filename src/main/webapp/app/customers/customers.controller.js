(function () {
    "use strict";

    var injectedParams = ["CustomersService"],
        CustomersController = function (CustomersService) {
            var vm = this;

            vm.customers = [];
            vm.deleteCustomer = deleteCustomer;

            init();

            /**
             * Load all the data needed.
             */
            function init() {
                CustomersService.list().then(function (customers) {
                    vm.customers = customers;
                });
            }

            /**
             * Deletes the given customer
             * @param {Object} customer The customer to be deleted
             */
            function deleteCustomer(customer) {
                CustomersService.remove(customer.id).then(function () {
                    init();
                });
            };

        };

    CustomersController.$inject = injectedParams;
    angular.module("customersApp").controller("CustomersController", CustomersController);

}());
