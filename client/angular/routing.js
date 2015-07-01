angular.module('app').config([
    '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/dashboard/employes");


        $stateProvider
            .state('dashboard', {
                abstract: true,
                url: '/dashboard',
                views: {
                    "": {
                        templateUrl: 'angular/app/dashboard/dashboard.html',
                        controller: 'dashboardController',
                        controllerAs: 'dashboard'

                    },
                    "footer@dashboard": {
                        templateUrl: 'angular/app/shared/footer@dashboard/footer.html'

                    },
                    "graph@dashboard": {
                        templateUrl: 'angular/app/shared/graph@dashboard/graph.html'
                    },
                    "productivity@dashboard": {
                        templateUrl: 'angular/app/shared/productivity@dashboard/productivity.html',
                        controller: 'tasksController'
                    },
                    "datas@dashboard": {
                        templateUrl: 'angular/app/shared/datas@dashboard/datas.html',
                        controller: 'employeController',
                        controllerAs: 'employeBox'
                    }
                }
            })
            .state('dashboard.employes', {
                url: '/employes',
                views: {
                    "": {
                        templateUrl: 'angular/app/dashboard-employes/dashboard-employes.html',
                        controller: 'employeController',
                        controllerAs: 'employe'
                    }
                }

            })
            .state('dashboard.employes.detail', {
                url: '/:id',
                templateUrl: 'angular/app/dashboard-employes-detail/dashboard-employes-detail.html',
                controller: 'employeDetailController',
                controllerAs: 'employe'
            })
            .state('dashboard.tasks', {
                url: '/tasks',
                templateUrl: 'angular/app/dashboard-tasks/dashboard-tasks.html',
                controller: 'tasksController'
            })
            .state('dashboard.tasks.low', {
                url: '/low',
                templateUrl: 'angular/app/dashboard-tasks-low/dashboard-tasks-low.html'
            })
            .state('dashboard.tasks.middle', {
                url: '/middle',
                templateUrl: 'angular/app/dashboard-tasks-middle/dashboard-tasks-middle.html'
            })
            .state('dashboard.tasks.high', {
                url: '/high',
                templateUrl: 'angular/app/dashboard-tasks-high/dashboard-tasks-high.html'
            });
    }
]);