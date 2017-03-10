(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Home', Home);

  Home.$inject = ['$scope','$interval'];

  function Home($scope, $interval) {
    var home =  this;
    home.section = 'main';

    var carouselWidth = $('.carousel-container').width();
    var items =  $('nav.item').length;
    home.items =  items;

    home.selected = 0;

    var totalWidth =  items*carouselWidth;
    var totalHeight = $('.carousel-container').height();
    console.log(totalHeight);
    $('.carousel-riel').width(totalWidth);
    $('nav.item').width(carouselWidth);
    // $('nav.item').height(totalHeight);

    home.getNumber = function(num) {
      return new Array(num);   
    }

    home.selectIt = function(index){
      home.selected = index;
      var left = index*carouselWidth*-1;
      $('.carousel-riel').animate({left: left}, 300);
    }

    // $interval(function(){
    //   var selected = home.selected+1 < home.items? ++home.selected: 0;
    //   home.selectIt(selected);
    // },3000)


  }

})();