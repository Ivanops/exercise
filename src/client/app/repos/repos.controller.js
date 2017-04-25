/**
 * Users Controller
 * @namespace Controller
 */
(function(){
  'use strict';
  angular
    .module('app')
    .controller('ReposController', ReposController);
    
  /**
   * @namespace UsersController
   * @desc Controls users information
   */
  ReposController.$inject = ['paginationService', '$http', '$q'];
  function ReposController (paginationService, $http) {
    var vm = this;
    vm.url = paginationService.currentRepoUrl;
    vm.page = paginationService.currentRepoPage;
    vm.repos = [];
    vm.pages = [];
    vm.clickPagination = clickPagination;

     activate();

  /**
   * @namespace activate
   * @desc Gets dinamic http request by user url
   */
    function activate() {
      var url = vm.url + '?page=' + vm.page;
      var options = {
        headers: {'Accept':'application/vnd.github.v3+json'},
        url: url,
        method: 'GET'
      }
      
      $http(options)
        .then(function(response) {
          if (response.headers('link')) {
            var str = response.headers('link').split('; ');
            var str2 = str[1].split(', ');
            for (var i=0; i < Number(str2[1][str2[1].length-2]); i++) {
              var isActive = '';
              if (i == 0) {
                isActive = 'active';
              }
              vm.pages[i] = {isActive:isActive,number:(i+1)};
            }  
          }
          vm.repos = response.data; 
        })
         .catch(getCustomerFailed);
    }

  /**
   * @namespace clickPagination
   * @desc Gets page selected information
   */
    function clickPagination(number) {
      var url = vm.url + '?page=' + number;
      var options = {
        headers: {'Accept':'application/vnd.github.v3+json'},
        url: url,
        method: 'GET'
      }
      $http(options)
        .then(function(response) {
          for (var key in vm.pages) {
            var isActive = '';
            if (number === vm.pages[key].number) {
              isActive = 'active';
            }
            vm.pages[key].isActive = isActive
          }
          vm.repos = response.data;
        })
        .catch(getCustomerFailed);
    }

  /**
   * @namespace getCustomerFailed
   * @desc Handles rejected promise
   */
    function getCustomerFailed(e) {
        var newMessage = 'Failing get Repos'
        if (e.data && e.data.description) {
          newMessage = newMessage + '\n' + e.data.description;
        }
        e.data.description = newMessage;
        logger.error(newMessage);
        return $q.reject(e);
    }
  }
})();