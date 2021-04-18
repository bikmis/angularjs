//iife - immediately invoked function expression
(function () {
  "use strict";
                  //setter module method with ngRoute being injected
  var appModule = angular.module('appModule', ['ngRoute'])
  
  appModule.run(['$rootScope', '$route', function ($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function () {
      document.title = $route.current.title;
    });
  }]);

}());