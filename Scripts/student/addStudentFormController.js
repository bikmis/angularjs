appModule.controller('addStudentFormController', function($scope, $location){
  $scope.saveStudent = function(student){
    $location.path('students').search({'student': student});
  }

})