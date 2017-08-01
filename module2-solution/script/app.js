
(function(){

'use strict'

angular.module('ShoppingCartApp', [])
.controller('ToBuyListController', ToBuyListController)
.controller('AlreadyBoughtListController', AlreadyBoughtListController)
.service('ListService', ListService);

ToBuyListController.$inject = ['ListService'];
function ToBuyListController (ListService){

  var list1 = this;

  //var shoppingCart = ListService();

  // -the ToBuyList needs to start pre-populated with 5 itmes.
  // -need functinality to add items to the list?
  // -clicking the "bought" button removes the item and adds it to the AlreadyBought list

  // so, we're just using the controller to instantiate a list? The functionality of the list in implemented in a service?

  // what does this controller do and need in order to function?
  //
  // it displays the array of objects that need to be bought. Per the assignment instructions, this array can be hard coded to a variable
  //
  // there needs to be a service that can remove items from the array, and push those to list2
  list1.items = ListService.getItemsDefault();

  list1.removeItems = function (itemIndex) { //this is defining the function in the HTML binding list.removeItems()
    // var itemToMove = ListService.removeItemsDefault(itemIndex);
    // ListService.addItem (itemToMove);

    // ListService.addItem (itemToMove.itemName, itemToMove.itemQuantity);

    ListService.removeItemsDefault(itemIndex);

    //console.log(itemToMove);
    //console.log(itemToMove.name);

    //console.log(ListService.getItems());
  };
}

AlreadyBoughtListController.$inject = ['ListService'];
function AlreadyBoughtListController (ListService){

  var list2 = this;

  list2.items = ListService.getItems();

  console.log(ListService.getItems());


};

function ListService () {
  //this service defines the shopping list and functionality

  var service = this;

  var items = []; //empty array

  var itemsDefault = [{name: "poop1", quantity: 3}, {name: "poop2", quantity: 3}, {name: "poop3", quantity: 3}, {name: "poop4", quantity: 3}, {name: "poop5", quantity: 3}];

  // service.addItem = function (itemName, itemQuantity) {
  //   var item = {
  //     name: itemName,
  //     quantity: itemQuantity
  //   };
  //   items.push(item);
  // };

  service.addItem = function (item) {

    items.push(item);
  };

  // service.removeItemsDefault = function (itemIndex){
  //
  //   var removed = itemsDefault.splice(itemIndex, 1);
  //
  //   return removed;
  // };

  service.removeItemsDefault = function (itemIndex){

    var removed = itemsDefault.splice(itemIndex, 1);

    service.addItem(removed);
  };
  // service.removeItems = function () {
  //
  // };

  service.getItemsDefault = function () {
    return itemsDefault;
  };

  service.getItems = function () {
    return items;
  };

};
})();
