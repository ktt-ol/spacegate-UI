'use strict';

angular.module('spacegateUiApp').controller('TraffHistoryCtrl',
  function ($scope, $log) {

    $scope.rrdSize = {
      preview: {
        width: 400,
        height: 200
      },
      big: {
        width: 1000,
        height: 500
      }
    };
  });
