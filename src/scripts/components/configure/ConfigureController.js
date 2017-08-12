'use strict';

function ConfigureController (
	$scope,
	translateResolver
) {
    translateResolver.resolve('example');
	$scope.favoriteColors = [
		{ label: 'Red', value: false },
		{ label: 'Orange', value: false },
		{ label: 'Yellow', value: false },
		{ label: 'Green', value: false },
		{ label: 'Blue', value: false },
		{ label: 'Purple', value: false },
		{ label: 'Black', value: false}];
	$scope.favoriteCities = ['Chicago', 'Seattle', 'Los Angeles'];
}

ConfigureController.$inject = ['$scope', 'translateResolver'];

angular.module('example').controller('ConfigureController', ConfigureController);
