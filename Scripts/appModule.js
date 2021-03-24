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
    $locationProvider.html5Mode(true);
  })
  