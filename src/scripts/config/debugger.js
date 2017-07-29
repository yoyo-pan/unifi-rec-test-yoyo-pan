'use strict';

angular.module('example').run([
  '$injector',
  function(
    $injector
  ) {
    window.DEBUGGER = {
      inject: function(service) {
        return $injector.get(service);
      },
      scope: function(element) {
        return angular.element(element).scope();
      }
    };
  }
]);
