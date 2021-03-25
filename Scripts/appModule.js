var appModule = angular.module('appModule', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
      })
      .when('/employee', {
        templateUrl: 'templates/employee.html',
        controller: 'employeeController'
      })
      .when('/filterSortingExample', {
        templateUrl: 'templates/filterSortingExample.html',
        controller: 'employee_2_Controller'
      })
      .otherwise({
        redirectTo: '/home' //default route, http://127.0.0.1:5500/home and http://127.0.0.1:5500 open the home page(/home)
      })
    $locationProvider.html5Mode(true);
  })
  