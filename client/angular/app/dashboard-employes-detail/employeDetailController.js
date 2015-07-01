angular.module('app.controllers').controller('employeDetailController', [
    'employeService', '$scope', '$stateParams', function (employeService, $scope, $stateParams) {
        var self = this;


        initialize();
        $scope.deleteEmploye = deleteEmploye;


        function initialize() {

            initilizeScope();
        }

        function initilizeScope() {
            $scope.employeId = $stateParams.id;

        }

        function deleteEmploye(employeId) {
            employeService.deleteEmploye(employeId);
        }


    }
]);