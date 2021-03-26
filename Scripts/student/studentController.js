appModule.controller('studentController', function($scope, $routeParams){
  $scope.student = $routeParams.student;
  console.log($routeParams.student);
})