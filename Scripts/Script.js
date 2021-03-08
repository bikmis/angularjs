var myModule = angular.module("myModule", [])
                      .controller('myController',  function ($scope) {
                            var employee = { firstname: 'Sam', 
                                             lastname: 'Smith', 
                                             gender: 'Male'};
                            $scope.employee = employee;
                            $scope.title = "AngularJS Tutorial"
                      });

