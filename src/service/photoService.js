(function () {
  "use strict";

  var photoFunc = function ($http) {
    var getPhoto = $http({
      Method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/photos'
    })

    return {
      getPhoto: getPhoto
    }
  }

  var appModule = angular.module('appModule');
  appModule.factory('photoService', ['$http', photoFunc]);
}())