'use strict';

function MainController (
  $window
) {
  this.$window = $window;
}

MainController.$inject = [
  '$window'
];

angular.module('example').controller('MainController', MainController);
