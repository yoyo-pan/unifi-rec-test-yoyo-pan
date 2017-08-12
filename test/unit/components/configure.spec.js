'use strict';

describe('Directive: unifiConfigureForm', function () {
  var suite = {};

  beforeEach(angular.mock.module('example'));

  beforeEach(inject(function ($injector) {
    suite.$compile = $injector.get('$compile');
    suite.scope = $injector.get('$rootScope').$new();
  }));

  describe('default', function () {
    beforeEach(function () {
      var template = '<unifi-configure-form />';

      suite.element = suite.$compile(template)(suite.scope);
      suite.scope.$apply();
      suite.controller = suite.element.controller('unifiConfigureForm');
    });

    afterEach(function () {
      suite.element.remove();
      suite.scope.$destroy();
      suite = {};
    });

    it('should return checked colors', function () {
      suite.scope.favoriteColors = [
        { label: 'Red', checked: false },
        { label: 'Orange', checked: true },
        { label: 'Yellow', checked: false },
        { label: 'Green', checked: true }];
      var colors = suite.scope.getFavoriteColors();
      expect(colors).toEqual('Orange, Green');
    });
  });
});
