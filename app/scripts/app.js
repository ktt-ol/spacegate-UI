'use strict';

angular.module('spacegateUiApp', [
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/traffnow', {
        templateUrl: 'views/traffnow.html',
        controller: 'TrafficCtrl'
      })
      .when('/traffhistory', {
        templateUrl: 'views/traffhistory.html',
        controller: 'TraffHistoryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
