'use strict';

angular.module('example').directive('unifiConfigureResult', [
  function () {
    return {
      controller: 'ConfiResultController',
      controllerAs: 'confiResultCtrl',
      template: require('./confiResult.jade')()
    };
  }
]);
