(function () {
  "use strict";
  var employeeController = function ($scope, $http, $log, helloService, $location, $anchorScroll) {
    $scope.title = 'Employee';
    var employees = [
      { firstname: 'Jack', lastname: 'Poly', gender: 'Male', registration: 'No' },
      { firstname: 'Jenefer', lastname: 'White', gender: 'Female', registration: 'No' },
      { firstname: 'Sam', lastname: 'Jonas', gender: 'Male', registration: 'Yes' }
    ]

    $scope.employees = employees;
    $scope.register = function (employee) {
      employee.registration = employee.registration === 'Yes' ? employee.registration = 'No' : employee.registration = 'Yes'
    }

    $scope.showRegistration = true;
    $scope.popUp = function (value) {
      alert(value);
    }

    //http GET service call example
    $http({
      Method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/photos'
    }).then(function (response) {
      $scope.photos = response.data;
      $log.info(response); // $log.info(response) is the same as console.log(response);
    }, function (error) {
      $scope.error = error.data;
      console.log(error);
    })

    $scope.sayHello = function (name) {
      return helloService.sayHello(name);
    }

    $scope.scrollTo = function (scrollLocation) {
      $location.hash(scrollLocation);
      $anchorScroll.yOffset = 20;
      $anchorScroll();
    }

  }

  var appModule = angular.module('appModule');
  appModule.controller('employeeController', ['$scope', '$http', '$log', 'helloService', '$location', '$anchorScroll', employeeController]);
}())

