
(function(){

'use strict'

angular.module('ShoppingCartApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingCartService', ShoppingCartService);

ToBuyController.$inject = ['ShoppingCartService'];
function ToBuyController (ShoppingCartService){

  var list1 = this;

  list1.items = ShoppingCartService.getItemsDefault();

  console.log("Default items passed to first conroller: ", ShoppingCartService.getItemsDefault());

  list1.removeItems = function (itemIndex) { //this is defining the function in the HTML binding list.removeItems()

    ShoppingCartService.removeItemsDefault(itemIndex);
    console.log("Removing items from default array: ", ShoppingCartService.getItemsDefault());
    console.log("Adding items to the purchase list: ", ShoppingCartService.getItems());
  };
}

AlreadyBoughtController.$inject = ['ShoppingCartService'];
function AlreadyBoughtController (ShoppingCartService){

  var list2 = this;

  list2.items = ShoppingCartService.getItems();

  //console.log(ShoppingCartService.getItems());
};

function ShoppingCartService () {
  //this service defines the shopping list and functionality

  var service = this;

  var items = []; //empty array

  var itemsDefault = [{name: "poop", quantity: 3}, {name: "poop", quantity: 3}, {name: "poop", quantity: 3}, {name: "poop", quantity: 3}, {name: "poop", quantity: 3}];
  // var itemsDefault = [1,2,3,4,5];

  service.addItem = function (item) {

    items.push(item);
  };

  service.removeItemsDefault = function (itemIndex){

    var removed = itemsDefault.splice(itemIndex, 1);
    console.log("splice value from default array: ", removed);
    console.log("splice value from default array: ", removed[0]);

    service.addItem(removed[0]);
  };

  service.getItemsDefault = function () {
    return itemsDefault;
  };

  service.getItems = function () {
    return items;
  };

};
})();
