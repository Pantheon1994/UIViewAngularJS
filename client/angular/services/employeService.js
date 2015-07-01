angular.module('app.services').service('employeService', ['$q', '$http', function ($q, $http) {
    var self = this;

    self.employes = [];

    self.getEmployes = getEmployes;
    self.deleteEmploye = deleteEmploye;
    self.getProductivity = getProductivity;

    self.productivity = 0;

    function getEmployes() {
        return $q(function (resolve, reject) {
            $http.get('employes.json').success(function (employes) {
                self.employes = employes;
                self.getProductivity();
                resolve(self.employes);
            }).error(function (error) {
                reject(error);
            });
        });
    }

    function deleteEmploye(employeId) {
        _.remove(self.employes, {'id': (employeId)});
    }


    function getProductivity() {
        var productivityTemp = 0;
         for (var i = 0; i < self.employes.length; i++) {
             var employe = _.find(self.employes, {'id': (i)});
             productivityTemp += employe.productivity;
         }
        self.productivity = productivityTemp / self.employes.length;
    }


}]);