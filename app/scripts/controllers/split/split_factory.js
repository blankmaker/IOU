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
        owes: 0, 
        actions: []
      };
      splittersLength++;
    };

    var lineItems = [];
    var addLineItem = function(item, cost, whoPaid) {
      if (splitters[whoPaid]) {
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
      } else {
        alert(whoPaid + ' is not in your group. Please re-enter your line item with a valid splitter');
      }
    };


    var calculate = function() {
      var sentenceInfo = {
        toPay: [],
        toGet: [],
        total: total,
        costPP: costPP
      };
      for (var splitter in splitters) {
        splitters[splitter].owes -= splitters[splitter].contributed - costPP;
        if (splitters[splitter].owes > 0) {
          sentenceInfo.toPay.push(splitters[splitter]);
        } else {
          sentenceInfo.toGet.push(splitters[splitter]);
        }
      }

      // sort owes and due money
      sentenceInfo.toPay.sort(function(a,b) { return b.owes-a.owes; });
      sentenceInfo.toGet.sort(function(a,b){ return b.owes-a.owes; });

      var generateActions = function(toPay, toGet) {
        toPay.forEach(function(payer, index) {
          while (payer.owes > 0) {
            toGet.forEach(function(recipient, index) {
              if (payer.owes >= Math.abs(recipient.owes) && recipient.owes < 0) {
                payer.actions.push({ whoToPay: recipient.name, howMuch: Math.abs(recipient.owes)});
                payer.owes += recipient.owes;
                recipient.owes = 0;
                console.log('payer owes: ', payer, ':', payer.owes);
              } else if (payer.owes < Math.abs(recipient.owes) && recipient.owes < 0) {
                payer.actions.push({ whoToPay: recipient.name, howMuch: payer.owes});
                recipient.owes += payer.owes;
                payer.owes = 0;
                console.log('payer owes2: ', payer, ':', payer.owes);
              }
            });
          }
        });
      };

      generateActions(sentenceInfo.toPay, sentenceInfo.toGet);
      console.log(sentenceInfo);
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

