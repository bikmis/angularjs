(function () {
  "use strict";
  var detailStudentController = function ($scope, $routeParams) {
    console.log($routeParams.id);
    $scope.student = $routeParams.student;
  }

  var appModule = angular.module('appModule');
  appModule.controller('detailStudentController', detailStudentController);
}())

