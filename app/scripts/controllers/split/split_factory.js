'use strict';

angular.module('splitsiesApp')
  
  .factory('Split', function() {

    var total = 0;
    var costPP = 0;

    var splitters = {};
    var splittersLength = 0;

    var addSplitter = function(splitter) {
      splitters[splitter] = {
        name: splitter,
        contributed: 0,
        owes: 0
      };
      splittersLength++;
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
      costPP = total/splittersLength;
      splitters[whoPaid].contributed += cost;
      lineItems.push(lineItem);
    };

    var calculate = function() {
      var sentenceInfo = {
        owes: [],
        dueMoney: [],
        total: total,
        costPP: costPP
      };
      for (var splitter in splitters) {
        splitters[splitter].owes -= splitters[splitter].contributed - costPP;
        if (splitters[splitter].owes > 0) {
          sentenceInfo.owes.push(splitters[splitter]);
        } else {
          sentenceInfo.dueMoney.push(splitters[splitter]);
        }
      }
      return sentenceInfo;
    };

    return {
      splitters: splitters,
      addSplitter: addSplitter,
      lineItems: lineItems,
      addLineItem: addLineItem, 
      costPP: costPP,
      totals: function() { console.log(total);return total; },
      calculate: calculate
    };

  });

