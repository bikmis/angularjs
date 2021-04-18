(function () {
  "use strict";
  //getter module method
  var appModule = angular.module('appModule')
  
  appModule.run(['$rootScope', '$route', function ($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function () {
      document.title = $route.current.title;
    });
  }]);

}());