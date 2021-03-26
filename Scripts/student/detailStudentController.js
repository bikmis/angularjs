appModule.controller('detailStudentController', function($scope, $routeParams){
  $scope.student = $routeParams.student;
  console.log($routeParams.student);
})