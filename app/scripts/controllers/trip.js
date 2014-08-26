'use strict';

/**
 * @ngdoc function
 * @name iouApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iouApp
 */
angular.module('iouApp')
  .controller('TripCtrl', function ($scope) {
    $scope.trips = [];
    $scope.trip = '';
    $scope.addTrip = function() {
       $scope.trips.unshift($scope.trip);
       $scope.trip = '';
    };
  });
