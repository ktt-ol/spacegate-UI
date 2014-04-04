'use strict';

angular.module('spacegateUiApp').directive(
  'nextUpdateIndicator', function () {
    return {
      scope: {
        play: '='
      },
      template: '<div class="bowlG" title="Next update indicator" ng-class="{ \'run\': play }">\n    <div class="bowl_ringG">\n        <div class="ball_holderG">\n            <div class="ballG">\n            </div>\n        </div>\n    </div>\n</div>\n',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
