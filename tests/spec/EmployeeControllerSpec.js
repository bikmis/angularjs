describe('employeeController', function () {

  beforeEach(module("appModule"));

  var $controller, $rootScope, helloService;

  //helloService.js needs to be referenced in SpecRunner.html
  beforeEach(inject(function (_$controller_, _$rootScope_, _helloService_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    helloService = _helloService_;
  }))


  it('sum', function () {
    var $scope = $rootScope.$new();
    $controller('employeeController', { $scope: $scope });
    var sum = $scope.add(2, 3);
    expect(5).toEqual(sum);
  })

  it('say hello', function () {
    var $scope = $rootScope.$new();
    $controller('employeeController', { $scope: $scope });
    var greeting = $scope.sayHello('Jack')
    expect('Hello Jack').toEqual(greeting);
  })
})