angular.module('app.filters').filter('filterByObject', ['$q', '$http', function ($q, $http) {
    return function(inputs,filterValues) {
        var output = [];
        angular.forEach(inputs, function (input) {
            if (filterValues.indexOf(input.id) !== -1) {
                output.push(input);
            }
        });
        return output;
    };

}]);