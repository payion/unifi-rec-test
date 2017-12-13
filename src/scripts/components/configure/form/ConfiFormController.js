'use strict';

function ConfiFormController ($scope, $location) {
  var init = function() {
    $scope.firstName = '';
    $scope.lastName = '';

    $scope.favoriteColors = {
      red: false,
      orange: false,
      yellow: false,
      green: false,
      blue: false,
      purple: false,
      black: false
    };

    $scope.favoriteCity = '';

    $scope.isVerified = true;
  };

  $scope.checkRequired = function() {
    for(var color in $scope.favoriteColors) {
      if($scope.favoriteColors[color]) {
        return true;
      }
    }
    return false;
  };

  var formatRequest = function() {
    var favoriteColors = [];
    for(var color in $scope.favoriteColors) {
      if($scope.favoriteColors[color]) {
        favoriteColors.push(color);
      }
    }

    return {
      'firstName': $scope.firstName,
      'lastName': $scope.lastName,
      'favoriteColors': favoriteColors,
      'favoriteCity': $scope.favoriteCity,
      'isVerified': $scope.isVerified
    };
  };

  $scope.toggleVerified = function (){
    $scope.isVerified = !$scope.isVerified;
  };

  $scope.submit = function() {
    $scope.$emit('handleEmit', formatRequest());
  };

  $scope.reset = function() {
    init();
  };

  $scope.cancel = function() {
    init();
    $location.path('/');
  };

  init();
}

ConfiFormController.$inject = [
  '$scope',
  '$location'
];

angular.module('example').controller('ConfiFormController', ConfiFormController);
