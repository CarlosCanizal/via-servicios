(function() {
  'use strict';

  angular
    .module('app.core')
    .controller('Shell',Shell);

  Shell.$inject = ['$scope','$window','$state','$q'];


  function Shell($scope, $window, $state,$q){
    // jshint validthis: true
    var shell = this;


    $scope.sections = ['home','company','services','distributor','contact'];
    $scope.moving = false;
    $scope.sectionIndex = false
    shell.loaded = false;

    $scope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
      shell.menu = toState.data && toState.data.menu ? toState.data.menu : null;
      $scope.sectionIndex = $scope.sections.indexOf(shell.menu);
    });

    // $(window).on('mousewheel DOMMouseScroll',debounce(function (e) {
    //   var direction = (function () {
    //     var delta = (e.type === 'DOMMouseScroll' ?
    //                  e.originalEvent.detail * -40 :
    //                  e.originalEvent.wheelDelta);

    //     return delta > 0 ? 0 : 1;
    //   }());


    //   if(direction === 1) {
    //     if($(window).scrollTop() + $(window).height() == $(document).height()){
    //       if($scope.sectionIndex+1 < $scope.sections.length){
    //         var newSection =  $scope.sections[$scope.sectionIndex+1];
    //         $state.go(newSection);
    //       }
    //     }
    //   }
    //   if(direction === 0) {
    //     if($('body').scrollTop() == 0){
    //       if($scope.sectionIndex-1 >= 0){
    //         var newSection =  $scope.sections[$scope.sectionIndex-1];
    //         $state.go(newSection);
    //       }
    //     }
    //   }
    // },200, true));
  }

})();

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
