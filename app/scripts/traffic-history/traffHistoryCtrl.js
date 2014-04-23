'use strict';

angular.module('spacegateUiApp').controller('TraffHistoryCtrl',
  function ($scope, $log, GlobalConfig) {

    var rrd = {
      width: 400,
      height: 200
    };

    $scope.makeImgPath = function (time) {
      return GlobalConfig.serviceUrl + 'rrd.png?start=' + time + '&width=' + rrd.width + '&height=' + rrd.height;
    };
  });
