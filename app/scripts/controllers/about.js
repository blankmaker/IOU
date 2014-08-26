'use strict';

/**
 * @ngdoc function
 * @name iouApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the iouApp
 */
angular.module('iouApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
