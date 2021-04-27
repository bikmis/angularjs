(function () {
  "use strict";
  //getter module method
  var appModule = angular.module('appModule');

  appModule.config(function ($routeProvider, $locationProvider) {
      $routeProvider.caseInsensitiveMatch = true;
      $routeProvider
        .when('/home', {
          templateUrl: 'src/home/home.html',
          controller: 'HomeController',
          title: 'Home'
        })
        .when('/employee', {
          templateUrl: 'src/employee/employee.html',
          controller: 'EmployeeController',
          title: 'Employee'
        })
        .when('/filterSortingExample', {
          templateUrl: 'src/filterAndSorting/filterSortingExample.html',
          controller: 'Employee_2_Controller',
          title: 'Filter & Sorting'
        })
        .when('/Students', {
          templateUrl: 'src/student/studentList.html',
          controller: 'StudentListController',
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
          controller: 'DetailStudentController',
          title: 'Student Detail'
        })
        .when('/add-student-form', {
          templateUrl: 'src/student/addStudentForm.html',
          controller: 'AddStudentFormController',
          title: 'Add Student Form'
        })
        .otherwise({
          redirectTo: '/home' //default route, http://127.0.0.1:5500/home and http://127.0.0.1:5500 open the home page(/home)
        })
      $locationProvider.html5Mode(true);
    })
}());