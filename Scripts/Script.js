/// <reference path="angularjs.min.js"/>

var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
  $scope.title = "AngularJS Tutorial"
});