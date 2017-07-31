
(function(){

'use strict'

angular.module('ShoppingCartApp', [])
.controller('ToBuyListController', ToBuyListController)
.controller('AlreadyBoughtListController', AlreadyBoughtListController)

ToBuyListController.$inject = ['$scope']; //don't need to inject $scope?
function ToBuyListController ($scope){ //and here too?

  // -the ToBuyList needs to start pre-populated with 5 itmes.
  // -need functinality to add items to the list?
  // -clicking the "bought" button removes the item and adds it to the AlreadyBought list

  // so, we're just using the controller to instantiate a list? The functionality of the list in implemented in a service?

};

AlreadyBoughtListController.$inject = ['$scope']
function AlreadyBoughtListController ($scope){

};

})();
