(function () {
    "use strict";

    var injectedParams = ["CustomersService"],
        CustomerFormController = function (CustomersService) {
            var vm = this;

        };

    CustomerFormController.$inject = injectedParams;
    angular.module("customersApp").controller("CustomerFormController", CustomerFormController);

}());
