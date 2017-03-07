(function() {
  'use strict';

  angular
    .module('app.core')
    .controller('Shell',Shell);

  Shell.$inject = ['$scope','$q'];


  function Shell($scope, $q){
    // jshint validthis: true
    var shell = this;


    $scope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
      
      shell.menu = toState.data && toState.data.menu ? toState.data.menu : null;
    });
    

  }

})();
