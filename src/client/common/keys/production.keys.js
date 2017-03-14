(function() {
  'use strict';

  angular
  .module('app.core')
  .factory('parseheaders', parseheaders);

  parseheaders.$inject = [];

  /* @ngInject */
  function parseheaders() {

    return {
      restKeys: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': 'qJlZJ7Kjoxp4LSkiYzC2T34Mkea4ZMqHmavrcyQN',
        'X-Parse-REST-API-Key': 'nh3qb811Z3SGRvDRI17LgUvzAj4STTa171wEq1oL'
      },
      javascriptKeys:{
        'applicationID' : 'qJlZJ7Kjoxp4LSkiYzC2T34Mkea4ZMqHmavrcyQN',
        'javascriptKey':'IgkJ82CLUN4xIpiwD9UmFblPaUE650tRsw46Mbld'

      }
    };
  }
})();
