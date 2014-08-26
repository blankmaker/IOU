'use strict';

/**
 * @ngdoc function
 * @name iouApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iouApp
 */
angular.module('iouApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
