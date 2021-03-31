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
  appModule.controller('homeController', homeController);
}());