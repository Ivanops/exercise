/**
 * Layout Controller
 * @namespace Controller
 */
(function(){
  'use strict';

  angular
    .module('app')
    .controller('LayoutController', LayoutController);

  /**
   * @namespace LayoutController
   * @desc Controls navigation bar functionality
   */
  LayoutController.$inject = ['paginationService'];
  function LayoutController (paginationService) {
    var ctrl = this;
    ctrl.usersActive = 'active';
    ctrl.repoActive = '';
    ctrl.clickUsers = clickUsers;
    ctrl.clickRepo = clickRepo;

    /**
     * @name clickUser
     * @desc changes view to users
     */

    function clickUsers() {
      ctrl.usersActive = 'active';
      ctrl.repoActive = '';
      paginationService.currentUserPage = 1;
      paginationService.currentRepoPage = 1;
    }

    /**
     * @name clickRepo
     * @desc changes the view to repos
     */
    function clickRepo() {
      ctrl.usersActive = '';
      ctrl.repoActive = 'active';
    }
   }
})();