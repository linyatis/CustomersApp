(function () {
    "use strict";

    var injectedParams = ["$http"],
        CustomersService = function ($http) {
            var factory = {};

            factory.list = function list() {
                return $http.get("customers").then(function (result) {
                    return result.data;
                });
            };
            factory.insert = function insert(customer) {
                return $http.post("customers").then(function (result) {
                    return result.data;
                });
            };
            factory.update = function update(customer) {
                return $http.put("customers/" + customer.id).then(function (result) {
                    return result.data;
                });
            };
            factory.remove = function remove(id) {
                return $http.delete("customers/" + id);
            };

            return factory;








        };

    CustomersService.$inject = injectedParams;
    angular.module("customersApp").factory("CustomersService", CustomersService);

}());
