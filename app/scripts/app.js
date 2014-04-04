'use strict';

angular.module('spacegateUiApp', [
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/traffic', {
        templateUrl: 'views/traffic.html',
        controller: 'TrafficCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
