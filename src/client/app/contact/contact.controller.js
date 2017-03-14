(function() {
  'use strict';

  angular
  .module('app.core')
  .controller('Contact', Contact);

  Contact.$inject = ['$scope','$state','$stateParams', 'parse'];

  function Contact($scope, $state, $stateParams, parse) {
    
    var contact =  this;
    contact.info = {
      name: "Carlos Canizal",
      email: "email",
      message : "mensaje"
    };

    contact.error = false;
    contact.success = false;
    contact.sending = false;

    contact.send = function(){
      if(!contact.sending){
        contact.sending = true;
        contact.error = false; 
        contact.error = false; 
        if(contact.form.$valid){
          var Cloud = parse.cloud('contact');
          Cloud.post({info:contact.info}).then(function(result){
            contact.success = true;
          },function(error){
            console.log(error);
          }).finally(function(){
            contact.sending = false;
          });
        }else{
          contact.error = true;
        }
      }
    }

  }
})();
