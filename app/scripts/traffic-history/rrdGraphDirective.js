'use strict';

angular.module('spacegateUiApp').directive(
  'rrdGraph', function (GlobalConfig) {
    return {
      scope: {
        start: '=',
        title: '=',
        size: '=',
        sizeBig: '='
      },
      template: '{{title}}\n<a href="{{imgBigPath}}">\n    <img ng-src="{{imgPath}}" class="thumbnail" />\n</a>\n',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {

        function makeUrl(size) {
          return GlobalConfig.serviceUrl + 'rrd.png?start=' + scope.start + '&width=' + size.width + '&height=' + size.height;
        }

        scope.imgPath = makeUrl(scope.size);
        scope.imgBigPath = makeUrl(scope.sizeBig);
      }
    };
  });
