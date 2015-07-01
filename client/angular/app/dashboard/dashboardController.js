angular.module('app.controllers').controller('dashboardController', [
    '$q', function ($q) {

        var self = this;
        self.backHistory = backHistory;

        function backHistory() {
            history.back();
        }

    }
]);