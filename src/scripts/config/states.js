'use strict';

angular.module('example').config([
  '$stateProvider',
  function (
    $stateProvider
  ) {
    $stateProvider
      .state('home', {
        controller: 'HomeController',
        controllerAs: 'homeCtrl',
        url: '/',
        template: require('../../views/home.jade')()
      });
  }
]);
