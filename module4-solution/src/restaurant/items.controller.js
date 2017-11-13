(function () {
'use strict';

angular.module('Restaurant')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['$stateParams', 'categories'];
function ItemsController($stateParams, categories) {
  var itemDetail = this;
  var item = categories[$stateParams.itemId];
  itemDetail.name = item.name;
  itemDetail.quantity = item.quantity;
  itemDetail.description = item.description;
}

})();
