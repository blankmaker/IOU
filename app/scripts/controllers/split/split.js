'use strict';

/**
 * @ngdoc function
 * @name splitsiesApp.controller:SplitCtrl
 * @description
 * # SplitCtrl
 * Controller of the splitsiesApp
 */

angular.module('splitsiesApp')
  .controller('SplitCtrl', ['$scope', 'Split', function ($scope, Split) {
    $scope.result;
    $scope.splitters = Split.splitters;
    // $scope.total = Split.totals;
    $scope.addSplitter = function(splitter) {Split.addSplitter(splitter);
      $scope.splitter = null;
    };

    $scope.lineItems = Split.lineItems;
    $scope.addLineItem = function(item, cost, whoPaid) {
      Split.addLineItem(item, cost, whoPaid);
      $scope.item = null;
      $scope.cost = null;
      $scope.whoPaid = null;
      // console.log(Split)
    };

    $scope.showAlert = false;
    $scope.calculate = function() {
      $scope.result = Split.calculate();
      $scope.showAlert = true;

    };

  }]);
