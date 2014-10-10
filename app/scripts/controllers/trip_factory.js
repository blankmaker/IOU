'use strict';

angular.module('app.factory')
  
  .factory('Trip', function() {
    var trips = [];

    var addTrip = function(trip) {
       trips.unshift(trip);
    };


    return {
      trips: trips,
      addTrip: addTrip
    };
  });

