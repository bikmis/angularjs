(function () {
  var addStudentFormController = function ($scope, $location) {
    $scope.saveStudent = function (student) {
      $location.path('students').search({ 'student': student });
    }

    $scope.goBackToStudentList = function(){
      $location.path('students');
    }
  }

  var appModule = angular.module('appModule');
  appModule.controller('addStudentFormController', addStudentFormController)
}())
