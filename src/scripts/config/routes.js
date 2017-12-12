'use strict';

angular.module('example').config([
  '$urlRouterProvider',
  function (
    $urlRouterProvider
  ) {
    $urlRouterProvider
      .otherwise('/');
  }
]);
