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
    $scope.splitters = [];
    $scope.splitter = '';
    $scope.lineItems = [];
    $scope.total = 0;
    $scope.whoPaid = '';
    $scope.cost = 0;
    $scope.item = '';
    $scope.reveal = false;
    $scope.addSplitter = function() {
       $scope.splitters.push($scope.splitter);
       $scope.splitter = '';

    };
    $scope.addLineItem = function() {
      var lineItem = { 
        item: $scope.item,
        cost: $scope.cost,
        whoPaid: $scope.whoPaid
      };
      $scope.lineItems.push(lineItem);
      $scope.total += lineItem.cost;
      $scope.item = '';
      $scope.cost = 0;
      $scope.whoPaid = '';
    };
    $scope.calculate = function() {
     console.log('i work');
    };


  });
