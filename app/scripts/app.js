'use strict';

/**
 * @ngdoc overview
 * @name iouApp
 * @description
 * # iouApp
 *
 * Main module of the application.
 */
angular
  .module('iouApp', [
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/split', {
        templateUrl: 'views/split.html',
        controller: 'SplitCtrl'
      })
      .when('/trips', {
        templateUrl: 'views/trip.html',
        controller: 'TripCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
});
