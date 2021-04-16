(function () {
  "use strict";
  var homeController = function ($scope) {
    var employee = {
      firstname: 'Sam',
      lastname: 'Smith',
      gender: 'Male'
    };
    $scope.employee = employee;
    $scope.title = 'AngularJS Tutorial';
    $scope.firstname = 'Bikash';
    var country = {
      name: 'USA',
      capital: 'Washington DC',
      flag: '/images/usaFlag.png'
    }
    $scope.country = country;
  };

  var appModule = angular.module('appModule');
  //'$scope' is passed into the array for minification purpose. This is sometimes called a min-safe array.
  appModule.controller('homeController', ['$scope', homeController]);
}());