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
    $scope.result;
    $scope.splitters = Split.splitters;
    $scope.total = Split.totals();
    $scope.addSplitter = function(splitter) {Split.addSplitter(splitter);
      $scope.splitter = null;
    };

    $scope.lineItems = Split.lineItems;
    $scope.addLineItem = function(item, cost, whoPaid) {
      Split.addLineItem(item, cost, whoPaid);
      $scope.item = null;
      $scope.cost = null;
      $scope.whoPaid = null;
      console.log(Split);
    };

    $scope.showAlert = false;
    $scope.calculate = function() {
      $scope.result = Split.calculate();
      $scope.showAlert = true;

    };
    

  });

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
