angular.module('app.controllers').controller('employeController', [
    'employeService', '$scope', '$stateParams', function (employeService, $scope, $stateParams) {
        var self = this;

        initialize();
        $scope.deleteEmploye = deleteEmploye;


        function initialize() {

            getEmployes();
            initilizeScope();
        }

        function initilizeScope() {
            $scope.employeId = $stateParams.id;

        }

        function getEmployes() {
            employeService.getEmployes().then(function (employes) {
                $scope.employes = employes;
                $scope.prod = employeService.productivity;
            });
        }


        function deleteEmploye(employeId) {
            employeService.deleteEmploye(employeId);
        }


    }
]);