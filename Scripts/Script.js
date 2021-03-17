var myModule = angular.module('myModule', []);

myModule.controller('myController', function ($scope) {
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
    { firstname: 'Jack', lastname: 'Poly', gender: 'Male', registration: 'No' },
    { firstname: 'Jenefer', lastname: 'White', gender: 'Female', registration: 'No' },
    { firstname: 'Sam', lastname: 'Jonas', gender: 'Male', registration: 'Yes' }
  ]

  $scope.employees = employees;
  $scope.register = function (employee) {
    employee.registration = employee.registration === 'Yes' ? employee.registration = 'No' : employee.registration = 'Yes'
  }
})

myModule.controller('myFilter', function ($scope) {
  $scope.title = 'Filter Example';

  var employees = [
    { name: 'Jack', dateOfBirth: new Date('01/15/1962'), gender: 'Male', salary: 5000487.357 },
    { name: 'Mark', dateOfBirth: new Date('05/19/1975'), gender: 'Male', salary: 478012.68 },
    { name: 'Anita', dateOfBirth: new Date('09/29/1981'), gender: 'Female',salary: 92490.46 }
  ]

  $scope.employees = employees;
  $scope.numberOfRows = 3;
  $scope.sortColumn = '-salary'
})