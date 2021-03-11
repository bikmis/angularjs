var myModule = angular.module('myModule', [])
  .controller('myController', function ($scope) {
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
  });

myModule.controller('myEmployee', function ($scope) {
  $scope.title = 'Employee';
  var employees = [
    { firstname: 'Jack', lastname: 'Poly', gender: 'Male' },
    { firstname: 'Jenefer', lastname: 'White', gender: 'Female' },
    { firstname: 'Sam', lastname: 'Jonas', gender: 'Male' }
  ]

  $scope.employees = employees;
})