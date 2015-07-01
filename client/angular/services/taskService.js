angular.module('app.services').service('taskService', ['$q', '$http', function ($q, $http) {
    var self = this;

    self.tasks = null;
    self.getTasks = getTasks;
    self.completTask = completTask;
    self.addTask = addTask;
    self.lastId = 50; // Simulation Last ID API;


    function getTasks() {
        return $q(function (resolve, reject) {
            $http.get('tasks.json').success(function (tasks) {
                self.tasks = tasks;
                resolve(self.tasks);
            }).error(function (error) {
                reject(error);
            });
        });
    }

    function completTask(taskId) {
        alert("Task completed !");
        _.remove(self.tasks, {'id': (taskId)});
    }

    function addTask(task) {
        self.tasks.push({
            id:self.lastId,
            name: task.name,
            description: task.description,
            deadline: new Date(),
            priority: task.priority
        });

        self.lastId += 1;
    }

}]);