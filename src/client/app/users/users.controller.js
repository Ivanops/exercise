/**
 * Users Controller
 * @namespace Controller
 */
(function(){
  'use strict';
  angular
    .module('app')
    .controller('UsersController', UsersController);
    
  /**
   * @namespace UsersController
   * @desc Controls users information
   */
  UsersController.$inject = ['UserService', 'paginationService'];
  function UsersController (UserService, paginationService) {
    var vm = this;
    vm.name = 'User controller';
    vm.users = [];
    vm.totalUsers = [];
    vm.getMoreUsers = getMoreUsers;
    vm.getRepos = getRepos

    activate();

    /**
     * @name activate
     * @desc active the http call
     */
    function activate(){
      UserService.get(getUsers);
    }

    /**
     * @name getUsers
     * @param {Array} data 
     * @desc updates users attribute
     */
    function getUsers(data) {
      vm.totalUsers = data;
      vm.users = vm.totalUsers.slice(0,4);
    }

    /**
     * @name getMoreUsers
     * @param {Array} data 
     * @desc load more users attribute
     */
    function getMoreUsers() {
      paginationService.currentUserPage += 1;
      var page = paginationService.currentUserPage;
      var firstLimit = ((page-1)*4)+4;
      var endLimit = 4
      if (firstLimit+4 >= vm.totalUsers.length) {
        endLimit = vm.totalUsers.length;
      } else {
        endLimit = firstLimit + 4;
      }
       
      var listToAdd = vm.totalUsers.slice(firstLimit, endLimit);
      vm.users = vm.users.concat(listToAdd);
    }

    function getRepos(repoUrl) {
      paginationService.currentRepoUrl = repoUrl;
    }
  }
})();