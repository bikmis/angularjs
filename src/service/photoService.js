(function () {
  "use strict";

  var photos = function ($http) {
    return $http({
      Method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/photos'
    })
  }

  var appModule = angular.module('appModule');
  appModule.factory('photoService', photos);
}())