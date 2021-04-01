(function () {
  "use strict";
  var detailStudentController = function ($scope, $routeParams) {
    console.log($routeParams.id);
    $scope.student = $routeParams.student;
  }

  var appModule = angular.module('appModule');
  //$scope and $routeParams are passed into the array for minification purpose. This is sometimes called a min-safe array.
  appModule.controller('detailStudentController', ['$scope', '$routeParams', detailStudentController]);
}())

