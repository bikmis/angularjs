(function(){
    var appModule = angular.module('appModule');

    appModule.controller('employee_2_Controller', function ($scope) {
      $scope.title = 'Filter Example';
    
      var employees = [
        { name: 'Jack', dateOfBirth: new Date('01/15/1962'), gender: 'Male', salary: 5000487.357 },
        { name: 'Mark', dateOfBirth: new Date('05/19/1975'), gender: 'Male', salary: 478012.68 },
        { name: 'Anita', dateOfBirth: new Date('09/29/1981'), gender: 'Female', salary: 92490.46 }
      ]
    
      $scope.employees = employees;
      $scope.numberOfRows = 3;
      $scope.sortColumn = 'name'
      $scope.sortColumnOrder = '+';
    
      $scope.executeSortColumn = function (column) {
        $scope.sortColumnOrder = $scope.sortColumnOrder === '+' ? '-' : '+'
        $scope.sortColumn = column;
      }
    
      $scope.searchByNameOrGender = function (employee) {
        if ($scope.searchText == undefined) {
          return true;
        }
    
        if (employee.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
          employee.gender.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
        ) {
          return true;
        }
        return false;
      }
    })
}())

