'use strict';

// code comes from https://github.com/mattlaver/angular-justgage/
angular.module('spacegateUiApp').directive(
  'justGage', function ($timeout) {
    return {
      restrict: 'E',
      scope: {
        id: '@',
        min: '=',
        max: '=',
        title: '@',
        value: '='
      },
      template: '<div id="{{id}}-justgage" class="gage"></div>',
      link: function (scope) {
        $timeout(function () {
          scope.value = scope.value || 0;
          var g = new JustGage({
            id: scope.id + '-justgage',
            min: scope.min,
            max: scope.max,
            title: scope.title,
            value: scope.value,
            humanFriendly: true
          });

          scope.$watch('value', function (updatedValue) {
            if (updatedValue) {
              g.refresh(updatedValue)
            }
          }, true);
        });
      }
    };
  });
