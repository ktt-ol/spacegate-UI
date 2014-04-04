'use strict';

angular.module('spacegateUiApp').directive(
  'speedBar', function () {
    return {
      scope: {
        value: '=',
        max: '='
      },
      templateUrl: 'views/sppedBar.tpl.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.barColor = '';
        scope.percentValue = 0;
        scope.$watch('[value, max]', function (newValue) {
          scope.percentValue = 100 / scope.max * scope.value;
          var valueClass = 'info progress-bar_low';
          if (scope.percentValue > 75) {
            valueClass = 'danger';
          } else if (scope.percentValue > 50) {
            valueClass = 'warning';
          } else if (scope.percentValue > 25) {
            valueClass = 'success progress-bar_low';
          }

//          console.log('max, value, %', scope.max, scope.value, scope.percentValue);

          scope.barColor = 'progress-bar-' + valueClass;
        }, true);
      }
    };
  });
