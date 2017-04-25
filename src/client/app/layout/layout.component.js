/**
 * Layout Component
 * @namespace Component
 */
(function(){
  'use strict';

  var component = {
    templateUrl: 'app/layout/layout.html',
    controller: 'LayoutController'
  }

  angular
    .module('app')
    .component('layoutComponent', component); 
   
})();