'use strict';

describe('Controller: TripCtrl', function () {

  // load the controller's module
  beforeEach(module('splitsiesApp'));

  var TripCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TripCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
