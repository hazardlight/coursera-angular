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

//minified code works!
// !function(){"use strict";function e(e){var t=this;t.items=e.getItemsDefault(),console.log("Default items passed to first conroller: ",e.getItemsDefault()),t.removeItems=function(t){e.removeItemsDefault(t),console.log("Removing items from default array: ",e.getItemsDefault()),console.log("Adding items to the purchase list: ",e.getItems())}}function t(e){this.items=e.getItems()}angular.module("ShoppingCartApp",[]).controller("ToBuyController",e).controller("AlreadyBoughtController",t).service("ShoppingCartService",function(){var e=this,t=[],o=[{name:"poop",quantity:3},{name:"poop",quantity:3},{name:"poop",quantity:3},{name:"poop",quantity:3},{name:"poop",quantity:3}];e.addItem=function(e){t.push(e)},e.removeItemsDefault=function(t){var n=o.splice(t,1);console.log("splice value from default array: ",n),console.log("splice value from default array: ",n[0]),e.addItem(n[0])},e.getItemsDefault=function(){return o},e.getItems=function(){return t}}),e.$inject=["ShoppingCartService"],t.$inject=["ShoppingCartService"]}();
