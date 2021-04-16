//iife - immediately invoked function expression
(function () {
  "use strict";
                  //setter module method with ngRoute being injected
  var appModule = angular.module('appModule', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
      $routeProvider.caseInsensitiveMatch = true;
      $routeProvider
        .when('/home', {
          templateUrl: 'src/home/home.html',
          controller: 'homeController',
          title: 'Home'
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
        .when('/Students', {
          templateUrl: 'src/student/studentList.html',
          controller: 'studentListController',
          title: 'List of Students'
          /*
          resolve property is used to navigate to this route only after the promise is resolved.
          resolve: {
            studentList: function($http) {
              return $http.get('StudentService.asmx/GetStudents')
                          .then(function (response){
                            return response.data;
                          })
            }
          }
          and in the studentListController, inject studentList and set students to studentList
          */
        })
        .when('/student/:id', {
          templateUrl: 'src/student/detailStudent.html',
          controller: 'detailStudentController',
          title: 'Student Detail'
        })
        .when('/add-student-form', {
          templateUrl: 'src/student/addStudentForm.html',
          controller: 'addStudentFormController',
          title: 'Add Student Form'
        })
        .otherwise({
          redirectTo: '/home' //default route, http://127.0.0.1:5500/home and http://127.0.0.1:5500 open the home page(/home)
        })
      $locationProvider.html5Mode(true);
    })

  appModule.run(['$rootScope', '$route', function ($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function () {
      document.title = $route.current.title;
    });
  }]);

}());