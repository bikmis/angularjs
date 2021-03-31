(function () {
  "use strict";
  var studentListController = function ($rootScope, $scope, $location, $routeParams, $route) {
    $rootScope.footer = 'This is a value of a property "footer" on $rootScope object in "studentListController" and it is available in all controllers. In the index.html this file should be referenced above other script files';

    var init = function () {
      saveStudent();
    };

    var students = [
      { id: 1, firstName: 'Jack', lastName: 'Smith', dob: '01/12/1980', gender: 'M', address: '1243 Manassas Dr, Manassas VA 20111' },
      { id: 2, firstName: 'Emma', lastName: 'William', dob: '03/16/1972', gender: 'F', address: '7843 Faifax St, Falls Church VA 22042' },
      { id: 3, firstName: 'Emily', lastName: 'Jackson', dob: '06/18/1978', gender: 'F', address: '8346 Forest Circle, Alenie NY 57489' },
      { id: 4, firstName: 'Brandon', lastName: 'Brown', dob: '09/22/1982', gender: 'M', address: '9671 Round Cake, Chantilly VA 35415' }
    ]

    $scope.students = students;
    $scope.detailStudent = function (id) {
      var student = students.find(s => s.id === id);
      $location.path('student/' + id).search('student', student);
    }

    $scope.deleteStudent = function (id) {
      var student = students.find(s => s.id === id);
      var studentIndex = students.indexOf(student);
      students.splice(studentIndex, 1);
      $scope.students = students;
    }

    $scope.addStudentForm = function () {
      $location.path('add-student-form');
    }

    var saveStudent = function () {
      if ($routeParams.student != undefined) {
        var student = $routeParams.student;
        $scope.students.push(student);
      }
    };

    $scope.reload = function () {
      $route.reload();
    }

    // We can use $routeChangeStart or $locationChangeStart to capture the event when we navigate away. 
    /*
    $scope.$on('$routeChangeStart', function(event, next, current){
      if(!confirm('Are you sure you want to navigate away to ' + next.$$route.originalPath+'?'))
      event.preventDefault();
    })
    */
    $scope.$on('$locationChangeStart', function (event, next, current) {
      if (!confirm('Are you sure you want to navigate away to ' + next + ' from ' + current + '?'))
        event.preventDefault();
    })

    init();
  }

  var appModule = angular.module('appModule');
  appModule.controller('studentListController', studentListController);

}());