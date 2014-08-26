'use strict';

/**
 * @ngdoc function
 * @name iouApp.controller:SplitCtrl
 * @description
 * # SplitCtrl
 * Controller of the iouApp
 */
angular.module('iouApp')
  .controller('SplitCtrl', function ($scope) {
    $scope.splitters = ['David','Tony'];
    $scope.splitter = '';
    $scope.addSplitter = function() {
       $scope.splitters.push($scope.splitter);
       $scope.splitter = '';
    };
  });
