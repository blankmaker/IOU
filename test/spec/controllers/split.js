'use strict';

describe('Controller: SplitCtrl', function () {

  // load the controller's module
  beforeEach(module('iouApp'));

  var SplitCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SplitCtrl = $controller('SplitCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
