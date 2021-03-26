appModule.controller('studentsController', function ($scope, $location) {
  var students = [
    { id: 1, firstName: 'Jack', lastName: 'Smith', dob: '01/12/1980', gender: 'M', address: '1243 Manassas Dr, Manassas VA 20111' },
    { id: 2, firstName: 'Emma', lastName: 'William', dob: '03/16/1972', gender: 'F', address: '7843 Faifax St, Falls Church VA 22042' },
    { id: 3, firstName: 'Emily', lastName: 'Jackson', dob: '06/18/1978', gender: 'F', address: '8346 Forest Circle, Alenie NY 57489' },
    { id: 4, firstName: 'Brandon', lastName: 'Brown', dob: '09/22/1982', gender: 'M', address: '9671 Round Cake, Chantilly VA 35415' }
  ]

  $scope.students = students;
  $scope.detailStudent = function(id){
    var student = students.find(s => s.id === id);
    $location.path('student/'+id).search('student', student);
  }
})