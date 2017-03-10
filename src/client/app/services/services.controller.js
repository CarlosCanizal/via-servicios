(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Services', Services);

  Services.$inject = ['$scope','$window','$interval'];

  function Services($scope, $window, $interval) {
    var service =  this;
    service.section = 'main';

    var carouselWidth = $('#services-carousel.carousel-container').width();
    var items =  $('#services-carousel nav.item').length;
    service.items =  items;

    service.selected = 0;

    var totalWidth =  items*carouselWidth;
    $('#services-carousel .carousel-riel').width(totalWidth);
    $('#services-carousel nav.item').width(carouselWidth);

    service.getNumber = function(num) {
      return new Array(num);   
    }

    angular.element($window).bind('resize', function(){
      carouselWidth = $('.carousel-container').width();
      totalWidth =  items*carouselWidth;
      $('#services-carousel .carousel-riel').width(totalWidth);
      $('#services-carousel  nav.item').width(carouselWidth);
    });

    service.selectIt = function(index){
      service.selected = index;
      var left = index*carouselWidth*-1;
      $('.carousel-riel').animate({left: left}, 300);
    }

    // $interval(function(){
    //   var selected = service.selected+1 < service.items? ++service.selected: 0;
    //   service.selectIt(selected);
    // },6000)


  }

})();