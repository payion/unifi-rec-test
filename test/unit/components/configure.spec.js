'use strict';

describe('Configure', function () {
  var suite = {};

  beforeEach(angular.mock.module('example'));

  beforeEach(inject(function ($injector) {
    suite.$compile = $injector.get('$compile');
    suite.scope = $injector.get('$rootScope').$new();

    suite.$location = $injector.get('$location');
    suite.$controller = $injector.get('$controller');
  }));

  describe('Directive: unifiConfigureForm', function () {
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

    it('should have a form', function () {
      expect(suite.element.find('.configure__form').length).toBe(1);
    });
  });

  describe('Directive: unifiConfigureResult', function () {
    beforeEach(function () {
      var template = '<unifi-configure-result />';

      suite.element = suite.$compile(template)(suite.scope);
      suite.scope.$apply();
      suite.controller = suite.element.controller('unifiConfigureResult');
    });

    afterEach(function () {
      suite.element.remove();
      suite.scope.$destroy();
      suite = {};
    });

    it('should have a div', function () {
      expect(suite.element.find('.configure--result').length).toBe(1);
    });
  });

  describe('Configure', function () {
    var _formScope = {};
    var _resultScope = {};
    var setValue = function(){};

    beforeEach(function () {
      _formScope = suite.scope;
      _resultScope = suite.scope;
      spyOn(_resultScope, '$on').and.callThrough();

      suite._formController = suite.$controller('ConfiFormController', { $scope: _formScope });
      suite._resultController = suite.$controller('ConfiResultController', { $scope: _resultScope });
      setValue = function() {
        _formScope.firstName = 'foo';
        _formScope.lastName = 'bar';
        _formScope.favoriteColors.red = true;
        _formScope.favoriteColors.black = true;
        _formScope.favoriteCity = 'Chicago';
      };
    });

    afterEach(function () {
      suite = {};
    });

    it('should be initialized', function () {
      setValue();
      _formScope.reset();
      expect(_formScope.firstName).toBe('');
      expect(_formScope.lastName).toBe('');
      expect(_formScope.checkRequired()).toBeFalsy();
      expect(_formScope.favoriteCity).toBe('');
    });

    it('should go to home page', function () {
      setValue();
      _formScope.cancel();
      expect(suite.$location.path()).toBe('/');
    });

    it('should pass request to configure result', function () {
      setValue();
      _formScope.submit();
      expect(_resultScope.$on).toHaveBeenCalled();
      setTimeout(function() {
        expect(_resultScope.result.CONFIGURE_FIRST_NAME).toBe('foo');
        expect(_resultScope.result.CONFIGURE_LAST_NAME).toBe('bar');
        expect(_resultScope.result.CONFIGURE_FAVORITE_COLORS).toContain(',');
        expect(_resultScope.result.CONFIGURE_FAVORITE_CITY).toBe('Chicago');
        expect(_resultScope.result.CONFIGURE_VERIFIED).toBe('yes');
      }, 1000);
    });
  });
});
