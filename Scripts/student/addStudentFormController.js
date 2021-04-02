(function () {
  "use strict";
  var addStudentFormController = function ($scope, $location) {
    $scope.saveStudent = function (studentForm) {
      if(studentForm.$valid){
        $location.path('students').search({ 'student': $scope.student });
      }
    }

    $scope.goBackToStudentList = function () {
      $location.path('students');
    }

    $scope.resetForm = function(studentForm){
      studentForm.$setPristine();
      studentForm.$setUntouched();
    }
  }
  //getter module function
  var appModule = angular.module('appModule');
  //$scope and $location are passed into the array for minification purpose. This is sometimes called a min-safe array.
  appModule.controller('addStudentFormController', ['$scope', '$location', addStudentFormController])
}())
