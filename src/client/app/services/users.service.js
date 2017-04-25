/**
 * User Service Factory
 * @namespace Factories
 */
(function(){
  'use strict';
  angular
    .module('app')
    .factory('UserService', UserService);

  /**
   * @namespace UserService
   * @desc Gets Users list and info
   */
  UserService.$inject = ['$resource', 'paginationService'];

  function UserService ($resource, paginationService) {

    var resource = {
      get: {
        method: 'GET',
        headers: {'Accept':'application/vnd.github.v3+json'},
        isArray: true
      }
      
    }
    var url = 'https://api.github.com/users';
    
    return $resource(url, {}, resource);
  }
})();