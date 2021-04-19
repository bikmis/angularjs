(function(){
  "use strict";
  var menuFunc = function($scope, $location){
    $scope.changeMenuColor = function(path){
      return $location.path()==path;
    }
  };

  var appModule = angular.module("appModule");
  appModule.controller("menuController", menuFunc)
}())