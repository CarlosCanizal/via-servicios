(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Services', Services);

  Services.$inject = ['$scope'];

  function Services($scope) {
    var service =  this;
    service.section = 'main';

    var carouselWidth = $('.carousel-container').width();
    var items =  $('nav.item').length;
    service.items =  items;

    service.selected = 0;

    var totalWidth =  items*carouselWidth;
    $('.carousel-riel').width(totalWidth);
    $('nav.item').width(carouselWidth);

    service.getNumber = function(num) {
      return new Array(num);   
    }

    service.selectIt = function(index){
      service.selected = index;
      var left = index*carouselWidth*-1;
      $('.carousel-riel').animate({left: left}, 300);
    }


  }

})();