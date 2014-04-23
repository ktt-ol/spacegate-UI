'use strict';

angular.module('spacegateUiApp').factory('GlobalConfig', function ($window) {
  return {
//    serviceUrl: 'http://' + $window.location.host + ':1337/'
    serviceUrl: 'http://localhost:1337/'
  };
});

