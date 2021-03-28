appModule.controller('detailStudentController', function($scope, $routeParams){
  console.log($routeParams.id);
  $scope.student = $routeParams.student;
})