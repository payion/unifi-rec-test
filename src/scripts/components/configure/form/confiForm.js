'use strict';

angular.module('example').directive('unifiConfigureForm', [
  function () {
    return {
      controller: 'ConfiFormController',
      controllerAs: 'confiFormCtrl',
      template: require('./confiForm.jade')()
    };
  }
]);
