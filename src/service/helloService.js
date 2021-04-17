(function () {
  "use strict";
  var helloFunc = function () {
    var sayHello = function (name) {
      if (!name) {
        return 'Enter Name';
      }

      return 'Hello ' + name;
    }

    return {
      sayHello: sayHello
    }
  }

  var appModule = angular.module('appModule');
  appModule.factory('helloService', helloFunc);
}())