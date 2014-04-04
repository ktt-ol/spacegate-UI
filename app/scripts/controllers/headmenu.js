'use strict';

angular.module('spacegateUiApp').controller('HeadMenuCtrl',
  function ($scope, $location) {
    $scope.data = {
      open: false
    };

    this.respButtonClick = function () {
      $scope.data.open = !$scope.data.open;
    };

    this.isActive = function (route) {
      return route === $location.path() ? 'active' : '';
    };
  });

