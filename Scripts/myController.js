appModule.controller('myController', function ($scope) {
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