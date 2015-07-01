angular.module('app.controllers').controller('tasksController', [
    'taskService', '$scope', '$stateParams', function (taskService, $scope, $stateParams) {

        var self = this;

        initialize();
        $scope.completTask = completeTask;
        $scope.addTask = addTask;

        function initialize() {
            getTasks();
        }

        function getTasks() {
            taskService.getTasks().then(function (tasks) {
                $scope.tasks = tasks;
            });
        }

        function completeTask(taskId) {
            taskService.completTask(taskId);
        }

        function addTask(task) {
            if (!task) {
                alert('Your task is empty');
            } else {
                taskService.addTask(task);
            }

        }
    }
]);
