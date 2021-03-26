var appModule = angular.module('appModule', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'homeController', 
        title:'Home'
      })
      .when('/employee', {
        templateUrl: 'templates/employee.html',
        controller: 'employeeController',
        title: 'Employee'
      })
      .when('/filterSortingExample', {
        templateUrl: 'templates/filterSortingExample.html',
        controller: 'employee_2_Controller',
        title: 'Filter & Sorting'
      })
      .when('/students', {
        templateUrl: 'templates/student/students.html',
        controller: 'studentsController',
        title: 'List of Students'
      })
      .when('/student/:id', {
        templateUrl: 'templates/student/student.html',
        controller: 'detailStudentController',
        title: 'Student Detail'
      })
      .when('/add-student-form', {
        templateUrl: 'templates/student/addStudentForm.html',
        controller: 'addStudentFormController',
        title: 'Add Student Form'
      })
      .otherwise({
        redirectTo: '/home' //default route, http://127.0.0.1:5500/home and http://127.0.0.1:5500 open the home page(/home)
      })
    $locationProvider.html5Mode(true);
  })
  
  appModule.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
    });
  }]);