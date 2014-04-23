'use strict';

angular.module('spacegateUiApp', [
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/main/main.route.html'
      })
      .when('/traffnow', {
        templateUrl: 'scripts/traffic-now/traffNow.route.html',
        controller: 'TrafficCtrl'
      })
      .when('/traffhistory', {
        templateUrl: 'scripts/traffic-history/traffHistory.route.html',
        controller: 'TraffHistoryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
