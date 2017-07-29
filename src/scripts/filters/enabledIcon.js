'use strict';

// # Enabled icon
angular.module('example').filter('enabledIcon', [
  function () {
    return function (value) {
      return value ? '<span class="icon ubnt-icon--check-2" />' : '';
    };
  }
]);
