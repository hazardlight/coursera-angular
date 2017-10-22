(function () {
'use strict';

angular.module('Restaurant')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuService', 'items'];
function CategoriesController(MenuService, items) {
  var mainlist = this;
  mainlist.items = items;
}

})();
