(function () {
'use strict';

angular.module('Restaurant')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['ShoppingListService', 'items'];
function CategoriesController(ShoppingListService, items) {
  var mainlist = this;
  mainlist.items = items;
}

})();
