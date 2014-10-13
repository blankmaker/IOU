'use strict';

/**
 * @ngdoc function
 * @name splitsiesApp.controller:SplitCtrl
 * @description
 * # SplitCtrl
 * Controller of the splitsiesApp
 */
angular.module('splitsiesApp')
  .controller('SplitCtrl', function ($scope) {
    $scope.splitters = [];
    $scope.splitter = '';

    $scope.alertMessage = 'Show ';
    $scope.lineItems = [];
    $scope.total = 0;
    $scope.cost = 0;
    $scope.item = '';
    $scope.whoPaid = '';

    $scope.reveal = false;
    $scope.addSplitter = function() {
       var member = {
          name: $scope.splitter,
          contributed: 0,
          owes: 0
       };

       $scope.splitters.push(member);
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
      // go through splitters array, and add their contribution
      for (var i = 0; i < $scope.splitters.length; i++) {
        if ($scope.splitters[i].name === lineItem.whoPaid) {
          $scope.splitters[i].contributed += lineItem.cost;
        }
      }
      $scope.item = '';
      $scope.cost = 0;
      $scope.whoPaid = '';
    };
    $scope.calculate = function() {
      var isOwed =[];
      var costPP = $scope.total/$scope.splitters.length;

      for (var j = 0; j < $scope.splitters.length; j++) {
        $scope.splitters[j].owes = costPP - $scope.splitters[j].contributed;
      }
      // gather those who are owed money
      for (var k = 0; k < $scope.splitters.length; k++) {
        if ($scope.splitters[k].owes < 0) {
          isOwed.push($scope.splitters[k].name);
        }
      }

      // make the sentence
      if (isOwed.length === 1) {
        $scope.alertMessage += isOwed[0];
      } else if (isOwed.length === 2) {
        $scope.alertMessage += isOwed[0] + ' and ' + isOwed[1];
      } else {
        for (var m = 0; m < isOwed.length; m++) {
          if (m === isOwed.length-1) {
            $scope.alertMessage += 'and ' + isOwed[m];
          } else {
            $scope.alertMessage += isOwed[m] + ', ';
          }
        }
      }
  
    $scope.alertMessage += ' the money!';
      
    $scope.reveal = true;
    console.log(isOwed);
     console.log($scope.alertMessage);
    };


  });
