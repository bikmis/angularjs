(function () {
  "use strict";

  var photos = function ($http) {
    var photoPromise = $http({
      Method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/photos'
    })

    return {
      photos: photoPromise
    }
  }

  var appModule = angular.module('appModule');
  appModule.factory('photoService', photos);
}())