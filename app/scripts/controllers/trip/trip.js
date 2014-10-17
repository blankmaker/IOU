'use strict';

/**
 * @ngdoc function
 * @name splitsiesApp.controller:TripCtrl
 * @description
 * # TripCtrl
 * Controller of the splitsiesApp
 */
 
angular.module('splitsiesApp')
  .controller('TripCtrl', ['$scope', 'Trip', function ($scope, Trip) {
    $scope.trips = Trip.trips;
    $scope.addTrip = Trip.addTrip;
  }]);
