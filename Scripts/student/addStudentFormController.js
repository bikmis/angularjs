(function () {
  "use strict";
  var addStudentFormController = function ($scope, $location) {
    $scope.saveStudent = function (student) {
      $location.path('students').search({ 'student': student });
    }

    $scope.goBackToStudentList = function () {
      $location.path('students');
    }
  }
  //getter module function
  var appModule = angular.module('appModule');
  //$scope and $location are passed into the array for minification purpose. This is sometimes called a min-safe array.
  appModule.controller('addStudentFormController', ['$scope', '$location', addStudentFormController])
}())
