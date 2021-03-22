myModule.controller('myEmployee', function ($scope, $http) {
  $http.get('https://jsonplaceholder.typicode.com/photos')
  .then(function(response){
    $scope.photos = response.data;
  })
})