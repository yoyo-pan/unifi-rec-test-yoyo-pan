'use strict';

function ConfigureController (
	$scope,
	$location,
	translateResolver
) {
    translateResolver.resolve('example');
	$scope.favoriteColors = [
		{ label: 'Red', checked: false },
		{ label: 'Orange', checked: false },
		{ label: 'Yellow', checked: false },
		{ label: 'Green', checked: false },
		{ label: 'Blue', checked: false },
		{ label: 'Purple', checked: false },
		{ label: 'Black', checked: false}];
	$scope.favoriteCities = ['Chicago', 'Seattle', 'Los Angeles'];
	$scope.response = {};
	init();

	function init () {
		$scope.favoriteColors.forEach(function(color) {
			color.checked = false;
		});

		$scope.config = {
			firstName: '',
			lastName: '',
			favoriteColors: [],
			favoriteCity: '',
			verified: false
		};
	}

	$scope.getFavoriteColors = function () {
		var colors = [];
		$scope.favoriteColors.forEach(function (color) {
			if (color.checked) {
				colors.push(color.label);
			}
		});

		return colors.join(', ');
	};

	$scope.onReset = function () {
		init();
	};

	$scope.onApply = function () {
		$scope.config.favoriteColors = $scope.getFavoriteColors();
		$scope.response = Object.assign({}, $scope.config);
	};

	$scope.onCancel = function () {
		$location.url('/');
	};
}

ConfigureController.$inject = ['$scope', '$location', 'translateResolver'];

angular.module('example').controller('ConfigureController', ConfigureController);
