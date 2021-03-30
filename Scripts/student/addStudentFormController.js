(function () {
  var addStudentFormController = function ($scope, $location) {
    $scope.saveStudent = function (student) {
      $location.path('students').search({ 'student': student });
    }
  }

  var appModule = angular.module('appModule');
  appModule.controller('addStudentFormController', addStudentFormController)
}())
