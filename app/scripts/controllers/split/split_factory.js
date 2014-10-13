'use strict';

angular.module('splitsiesApp')
  
  .factory('Split', function($http) {

    var total = 0;
    var costPP = 0;

    var splitters = [];
    // var splittersLength = 0;

    var addSplitter = function(splitter) {
      var member = {
        name: splitter,
        contributed: 0,
        owes: 0
      };
      splitters.push(member);
      // change this into a hashtable?
    };

    var lineItems = [];
    var addLineItem = function(item, cost, whoPaid) {
      var lineItem = { 
        item: item,
        cost: cost,
        whoPaid: whoPaid
      };

      // update totals for later
      total += cost;
      costPP = total/splitters.length;
      // splitters[whoPaid][contributed] += cost;

      lineItems.push(lineItem);
    };

    var calculate = function() {

      console.log(total);
      console.log(costPP);
    }

    return {
      splitters: splitters,
      addSplitter: addSplitter,
      lineItems: lineItems,
      addLineItem: addLineItem, 
      calculate: calculate,
    };

  });

