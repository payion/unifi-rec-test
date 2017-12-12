'use strict';

function ConfiResultController ($scope) {
  var init = function() {
    $scope.result = {
      'First Name' : '',
      'Last Name' : '',
      'Favorite Colors' : '',
      'Favorite City' : '',
      'Verified' : ''
    };
  };

  $scope.$on('handleBroadcast', function(event, args) {
    var favoriteColors = [];

    var capitalize = function(str) {
      return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    };

    init();

    for(var color in args.favoriteColors) {
      if(args.favoriteColors[color]) {
        favoriteColors.push(capitalize(color));
      }
    }

    $scope.result = {
      'First Name' : args.firstName,
      'Last Name' : args.lastName,
      'Favorite Colors' : favoriteColors.join(', '),
      'Favorite City' : args.favoriteCity,
      'Verified' : args.isVerified ? 'Yes' : 'No'
    };
  });

  init();
}

ConfiResultController.$inject = [
  '$scope'
];

angular.module('example').controller('ConfiResultController', ConfiResultController);
