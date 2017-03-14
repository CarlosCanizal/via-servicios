angular
.module('app')
.run(run);

// run.$inject = ['$rootScope','$timeout', '$state', 'userApi', 'Restangular', 'parseheaders'];
run.$inject = ['$rootScope','$timeout', '$state', 'Restangular', 'parseheaders'];

function run($rootScope, $timeout, $state, Restangular,parseheaders) {
  Restangular.setBaseUrl('https://parseapi.back4app.com/');
  Restangular.setDefaultHeaders(parseheaders.restKeys);

}

