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
  //$scope and $location is passed into the array for minification purpose
  appModule.controller('addStudentFormController', ['$scope', '$location', addStudentFormController])
}())
