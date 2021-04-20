(function(){
  "use strict";
  var menuController = function($scope, $location){
    $scope.changeMenuColor = function(path){
      return $location.path()==path;
    }
  };

  var appModule = angular.module("appModule");
  appModule.controller("menuController", menuController)
}())