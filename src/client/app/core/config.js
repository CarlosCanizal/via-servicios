angular
.module('app')
.config(config);

config.$inject = ['$locationProvider', '$urlRouterProvider','$stateProvider'];

function config($locationProvider,$urlRouterProvider, $stateProvider) {

  // $locationProvider.html5Mode(true);
  
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl : 'app/home/home.template.html',
      controller: 'Home',
      controllerAs: 'home',
      data:{
        menu : 'home'
      }
    })
    .state('company',{
      url:'/empresa',
      templateUrl : 'app/company/company.template.html',
      // controller: 'Home',
      // controllerAs: 'home'
      data:{
        menu : 'company'
      }
    })
    .state('services',{
      url:'/servicios',
      templateUrl : 'app/services/services.template.html',
      controller: 'Services',
      controllerAs: 'services',
      data:{
        menu : 'services'
      }
    })
    .state('distributor',{
      url:'/como-ser-distribuidor',
      templateUrl : 'app/distributor/distributor.template.html',
      controller: 'Distributor',
      controllerAs: 'distributor',
      data:{
        menu : 'distributor'
      }
    })
    .state('contact',{
      url:'/contacto',
      templateUrl : 'app/contact/contact.template.html',
      controller: 'Contact',
      controllerAs: 'contact',
      data:{
        menu : 'contact'
      }
    })
    .state('confidenciality',{
      url:'/confidencialidad',
      templateUrl : 'app/confidencialidad/confidencialidad.template.html'
    })
    .state('privacy',{
      url:'/privacidad',
      templateUrl : 'app/privacy/privacy.template.html',
      data:{
        menu : 'privacy'
      }
    })
    .state('faq',{
      url:'/preguntas-frecuentes',
      templateUrl : 'app/faq/faq.template.html',
      data:{
        menu : 'faq'
      }
    })
      
  $urlRouterProvider.otherwise('/');
}