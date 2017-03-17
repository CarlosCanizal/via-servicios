(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Geolocation', Geolocation);

  Geolocation.$inject = ['$scope','$q','$geolocation','NgMap'];

  function Geolocation($scope, $q, $geolocation,NgMap) {

    var geolocation =  this;

    var markers = [{lat:51.5033640, long: -0.1276250},{lat:51.5033273, long:-0.1285370},{lat:51.5031102, long:-0.1251896},{lat:51.5041287, long:-0.1286442}];

    // markers.push(latLng);


    NgMap.getMap().then(function(map) {
      for(var i=0; i< markers.length; i++){
        var myLatLng = new google.maps.LatLng(markers[i].lat, markers[i].long);
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: 'common/images/marker.png'
        });
        map.setCenter(myLatLng);
      }

    });

    // var map = new google.maps.Map(document.getElementById('map'), {
    //   zoom: 4,
    //   center: myLatLng
    // });

    // $geolocation.getCurrentPosition({
     // }).then(function(position) {
        // NgMap.getMap().then(function(map) {
        //   map.setCenter(myLatLng);
        // });
     // });


  }



})();