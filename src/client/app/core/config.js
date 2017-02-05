angular
.module('app')
.config(config);

config.$inject = ['$locationProvider', '$urlRouterProvider','$stateProvider'];

function config($locationProvider,$urlRouterProvider, $stateProvider) {

  // $locationProvider.html5Mode(true);
  
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl : 'app/home/home.template.html'
    })
    .state('privacy',{
      url:'/aviso-de-privacidad',
      templateUrl : 'app/home/home.privacy.html'
    })
    .state('confidenciality',{
      url:'/confidencialidad',
      templateUrl : 'app/home/home.confidenciality.html'
    })
      
  $urlRouterProvider.otherwise('/');
}