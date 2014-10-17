'use strict';

/**
 * @ngdoc overview
 * @name splitsiesApp
 * @description
 * # splitsiesApp
 *
 * Main module of the application.
 */
 
angular
  .module('splitsiesApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/split', {
        templateUrl: 'views/split.html',
        controller: 'SplitCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
});
