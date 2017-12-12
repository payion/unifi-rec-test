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
      })
      .state('configure', {
        controller: 'ConfigureController',
        controllerAs: 'configureCtrl',
        url: '/configure',
        template: require('../../views/configure.jade')()
      });
  }
]);
