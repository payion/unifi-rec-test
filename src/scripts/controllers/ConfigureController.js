'use strict';

function ConfigureController (
  translateResolver, $rootScope
) {
  $rootScope.$on('handleEmit', function(event, args) {
    $rootScope.$broadcast('handleBroadcast', args);
  });

  translateResolver.resolve('example');
}

ConfigureController.$inject = [
  'translateResolver',
  '$rootScope'
];

angular.module('example').controller('ConfigureController', ConfigureController);
