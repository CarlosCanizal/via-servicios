(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Home', Home);

  Home.$inject = ['$scope'];

  function Home($scope) {
    var home =  this;
    home.section = 'main';

    var carouselWidth = $('.carousel-container').width();
    var items =  $('nav.item').length;
    home.items =  items;

    home.selected = 0;

    var totalWidth =  items*carouselWidth;
    $('.carousel-riel').width(totalWidth);
    $('nav.item').width(carouselWidth);

    home.getNumber = function(num) {
      return new Array(num);   
    }

    home.selectIt = function(index){
      home.selected = index;
      var left = index*carouselWidth*-1;
      $('.carousel-riel').animate({left: left}, 300);
    }


  }

})();