(function () {
'use strict';

angular.module('Restaurant')
.controller('CategoriesController', CategoriesController);


// CategoriesController.$inject = ['MenuService', 'items']; //do we still need items?
CategoriesController.$inject = ['MenuService', 'categories'];
function CategoriesController(MenuService, categories) {
  var mainlist = this;

  mainlist.categories = categories;
  // var mainlist = this;
  // var promise;
  // //mainlist.items = items;
  // var namesList = [];
  //
  // promise = MenuService.getAllCategories();
  // promise.then(function(categories){
  //   mainlist.categories = categories;
  //   console.log("testing in CategoriesController, output for mainlist.categories[0].name=", mainlist.categories[0].name);
  //
  //   for(var i=0; i<mainlist.categories.length; i++)
  //   {
  //     console.log(mainlist.categories[i].name);
  //     namesList.push(mainlist.categories[i].name);
  //   }
  //   mainlist.categoryNames = namesList;
  //
  //
  // });
  //mainList.categories = categories.name;
}
})();
