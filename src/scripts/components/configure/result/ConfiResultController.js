'use strict';

function ConfiResultController ($scope, $translate) {
  var init = function() {
    $scope.result = {
      'CONFIGURE_FIRST_NAME' : '',
      'CONFIGURE_LAST_NAME' : '',
      'CONFIGURE_FAVORITE_COLORS' : '',
      'CONFIGURE_FAVORITE_CITY' : '',
      'CONFIGURE_VERIFIED' : ''
    };
  };

  $scope.$on('handleEmit', function(event, args) {
    var favoriteColors = [];

    init();

    $translate(args.favoriteColors).then(function (result) {
      favoriteColors = [];
      for(var color in result) {
        favoriteColors.push(result[color]);
      }

      $scope.result = {
        'CONFIGURE_FIRST_NAME' : args.firstName,
        'CONFIGURE_LAST_NAME' : args.lastName,
        'CONFIGURE_FAVORITE_COLORS' : favoriteColors.join(', '),
        'CONFIGURE_FAVORITE_CITY' : args.favoriteCity,
        'CONFIGURE_VERIFIED' : args.isVerified ? 'Yes' : 'No'
      };
    });

  });

  init();
}

ConfiResultController.$inject = [
  '$scope',
  '$translate'
];

angular.module('example').controller('ConfiResultController', ConfiResultController);
