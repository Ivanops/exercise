/**
 * Pagination Factory
 * @namespace Factories
 */
(function(){
  'use strict';
  angular
    .module('app')
    .service('paginationService', paginationService);

  /**
   * @namespace paginationService
   * @desc handles pagination attributes
   */

  function paginationService ($resource) {
    this.itemsPerPage = 4;
    this.currentUserPage = 1;
    this.currentRepoPage = 1;
    this.currentRepoUrl = ''
  }
})();