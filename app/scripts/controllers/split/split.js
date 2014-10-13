'use strict';

/**
 * @ngdoc function
 * @name splitsiesApp.controller:SplitCtrl
 * @description
 * # SplitCtrl
 * Controller of the splitsiesApp
 */
angular.module('splitsiesApp')
  .controller('SplitCtrl', function ($scope, Split) {

    $scope.splitters = Split.splitters;
    $scope.addSplitter = function(splitter) {Split.addSplitter(splitter);
      $scope.splitter = null;
    };

    $scope.lineItems = Split.lineItems;
    $scope.addLineItem = function(item, cost, whoPaid) {
      Split.addLineItem(item, cost, whoPaid);
      $scope.item = null;
      $scope.cost = null;
      $scope.whoPaid = null;
    };

    $scope.calculate = Split.calculate;

  });
    // $scope.calculate = function() {
    //   var isOwed =[];
    //   var costPP = $scope.total/$scope.splitters.length;

    //   for (var j = 0; j < $scope.splitters.length; j++) {
    //     $scope.splitters[j].owes = costPP - $scope.splitters[j].contributed;
    //   }
    //   // gather those who are owed money
    //   for (var k = 0; k < $scope.splitters.length; k++) {
    //     if ($scope.splitters[k].owes < 0) {
    //       isOwed.push($scope.splitters[k].name);
    //     }
    //   }

    //   // make the sentence
    //   if (isOwed.length === 1) {
    //     $scope.alertMessage += isOwed[0];
    //   } else if (isOwed.length === 2) {
    //     $scope.alertMessage += isOwed[0] + ' and ' + isOwed[1];
    //   } else {
    //     for (var m = 0; m < isOwed.length; m++) {
    //       if (m === isOwed.length-1) {
    //         $scope.alertMessage += 'and ' + isOwed[m];
    //       } else {
    //         $scope.alertMessage += isOwed[m] + ', ';
    //       }
    //     }
    //   }
  
    // $scope.alertMessage += ' the money!';
      
    // $scope.reveal = true;
    // console.log(isOwed);
    //  console.log($scope.alertMessage);
    // };
