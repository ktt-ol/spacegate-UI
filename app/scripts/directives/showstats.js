'use strict';

angular.module('spacegateUiApp').directive(
  'showStats', function () {
    return {
      scope: {
        d: '=data',
        maxRate: '=',
        relativeIpRate: '='
      },
      templateUrl: 'views/showStats.tpl.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
