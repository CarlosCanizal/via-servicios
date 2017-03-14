(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Home', Home);

  Home.$inject = ['$scope','$window','$interval'];

  function Home($scope, $window ,$interval) {
    var home =  this;
    home.section = 'main';

    var carouselWidth = $('#home-carousel.carousel-container').width();
    var items =  $('#home-carousel nav.item').length;
    home.items =  items;

    home.selected = 0;

    var totalWidth =  items*carouselWidth;
    var totalHeight = $('#home-carousel.carousel-container').height();
    $('#home-carousel .carousel-riel').width(totalWidth);
    $('#home-carousel  nav.item').width(carouselWidth);
    
    angular.element($window).bind('resize', function(){
      carouselWidth = $('#home-carousel.carousel-container').width();
      totalWidth =  items*carouselWidth;
      totalHeight = $('#home-carousel.carousel-container').height();
      $('#home-carousel .carousel-riel').width(totalWidth);
      $('#home-carousel  nav.item').width(carouselWidth);
    });



    home.getNumber = function(num) {
      return new Array(num);   
    }

    home.selectIt = function(index){
      home.selected = index;
      var left = index*carouselWidth*-1;
      $('#home-carousel .carousel-riel').animate({left: left}, 300);
    }

    // $interval(function(){
    //   var selected = home.selected+1 < home.items? ++home.selected: 0;
    //   home.selectIt(selected);
    // },8000)


  }

})();