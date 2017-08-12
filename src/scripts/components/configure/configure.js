'use strict';

angular.module('example').directive('unifiConfigureForm', [
  function () {
    return {
      controller: 'ConfigureController',
      controllerAs: 'configureCtrl',
      template: require('./configureForm.jade')()
    };
  }
]);

angular.module('example').directive('unifiConfigureSummary', [
  function () {
    return {
      controller: 'ConfigureController',
      controllerAs: 'configureCtrl',
      template: require('./configureSummary.jade')()
    };
  }
]);
