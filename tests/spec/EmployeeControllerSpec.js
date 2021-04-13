describe('employeeController', function () {

  beforeEach(module("appModule"));

  var $controller, $rootScope, helloService, $scope;

  //appModule.js, employeeController.js, and helloService.js need to be referenced in SpecRunner.html
  beforeEach(inject(function (_$controller_, _$rootScope_, _helloService_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    helloService = _helloService_;
  }))

  beforeEach(function(){
    $scope = $rootScope.$new();
    $controller('employeeController', { $scope: $scope });
  })

  it('sum', function () {
    var sum = $scope.add(2, 3);
    expect(5).toEqual(sum);
  })

  it('say hello', function () {
    var greeting = $scope.sayHello('Jack')
    expect('Hello Jack').toEqual(greeting);
  })
})