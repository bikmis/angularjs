(function () {
  var appModule = angular.module('appModule');

  appModule.filter('salary', function () {
    return function (salary) {
      switch (true) {
        case (salary <= 100000):
          return 'Too Little';
        case (salary > 100000 && salary <= 500000):
          return 'Moderate Amount';
        case salary > 500000:
          return 'Too Much';
      }
    }
  })

}())