
(function() {
  'use strict';
  angular
    .module('app')
    .config(config);

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'app/users/users.html',
          controller: 'UsersController',
          controllerAs: 'vm'
      })
      .when('/repo', {
          templateUrl: 'app/repos/repos.html',
          controller: 'ReposController',
          controllerAs: 'vm'
      })
      .otherwise({redirectTo:'/'});
    $locationProvider.html5Mode({
      enabled:true,
      requireBase:false
    });
  }
})();