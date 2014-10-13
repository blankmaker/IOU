'use strict';

angular.module('splitsiesApp')
  
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

