(function () {
  var appModule = angular.module('appModule');

  appModule.factory('helloService', function () {
    return {
      sayHello: function (name) {
        if (!name) {
          return 'Enter Name';
        }

        return 'Hello ' + name;
      }
    }
  })

}())