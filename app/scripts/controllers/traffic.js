'use strict';

angular.module('spacegateUiApp').controller('TrafficCtrl',
  function ($scope, $log) {

    $scope.showMeters = false;
    $scope.connectionError = false;

    $scope.relativeIpRate = false;
    $scope.stats = {
      short: {
      },
      long: {
      }
    };
    $scope.maxRate = {
      upload: 135424 * 0.9,
      download: 1682176 * 0.9
//      upload: 120000,
//      download: 2000000 // 16 MBit
    };

    function markSpecialIps(statsPerIp) {
      statsPerIp.forEach(function (item) {
        if (item.ip === 245) {
          item.special = 'FF Pferdemarkt (.245)'
        } else if (item.ip === 246) {
          item.special = 'FF Lappan (.246)';
        } else if (item.ip === 247) {
          item.special = 'FF FabLap2 (.247)';
        }
      });
    }

    function sortDetailStats(detailsIn, detailsOut) {
      if (detailsIn.length !== detailsOut.length) {
        throw new Error('detailsIn.length !== detailsOut.length');
      }

      var result = [], i;

      for (var i = 0; i < detailsIn.length; i++) {
        if (detailsIn[i] === 0 && detailsOut[i] === 0) {
          continue;
        }

        result.push({
          ip: i + 1,
          bytesIn: detailsIn[i],
          bytesOut: detailsOut[i],
          relativeIn: detailsIn[i] / $scope.maxRate.download,
          relativeOut: detailsOut[i] / $scope.maxRate.upload
        });
      }

      // sort by their relative part of the upload/download
      result.sort(function (a, b) {
        return Math.max(b.relativeIn, b.relativeOut) - Math.max(a.relativeIn, a.relativeOut);
      });

      return result;
    }

    function updateValues(data) {
      $scope.stats.now = data.now;
      ['short', 'long'].forEach(function (type) {
        var stats = $scope.stats[type] = {};
        var current = data[type];
        stats.totalIn = current.totalIn;
        stats.totalOut = current.totalOut;
        stats.perIp = sortDetailStats(current.detailIn, current.detailOut);
        stats.perIp = stats.perIp.splice(0, 5);
        markSpecialIps(stats.perIp);
      });
    }

//    var source = new EventSource('http://localhost:1337');
//    $scope.maxRate = 750000;
    var source = new EventSource('http://192.168.2.1:1337');
//    var source = new EventSource('http://192.168.178.254:1337');

    source.onopen = function () {
      $scope.$apply(function () {
        $log.log('EventSource is open');
        $scope.connectionError = false;
      });
    };

    source.onerror = function (err) {
      $scope.$apply(function () {
        $scope.connectionError = true;
        $scope.showMeters = false;

        $log.error('EventSource error.', err);
      });
    };

    source.addEventListener('stats', function (e) {
      $scope.$apply(function () {
        $scope.showMeters = true;
        var data = angular.fromJson(e.data);
//        console.log('got data:', data);
        updateValues(data);
      });
    }, false);

  });
