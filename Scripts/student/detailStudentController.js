(function () {
  "use strict";
  var detailStudentController = function ($scope, $routeParams) {
    console.log($routeParams.id);
    $scope.student = $routeParams.student;
  }

  var appModule = angular.module('appModule');
  //$scope and $routeParams are passed into the array for minification purpose
  appModule.controller('detailStudentController', ['$scope', '$routeParams', detailStudentController]);
}())

