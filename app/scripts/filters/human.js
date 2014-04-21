'use strict';

angular.module('spacegateUiApp').filter(
  'human', function ($filter) {
    var FRACTIONAL_DIGITS = 0;
    var KB = 1000;
//    var MB = 1000 * KB;

    function format(value) {
      return $filter('number')(value, FRACTIONAL_DIGITS).replace('.', ',');
    }

    return function (input) {
      if (typeof input !== 'number') {
        input = parseInt(input, 10);
        if (isNaN(input)) {
          input = 0;
        }
      }

//      if (input >= MB) {
//        return format(input / MB) + ' MB';
//      }

      if (input >= KB) {
        return format(input / KB) + ' KB';
      }

      return input + ' B';
    };
  });
