//notes
//
// Rest API - lecture 25 -prt2
//
// general idea:
// -you have a list of menu items with descriptions. The user inputs a list of search terms that will be matched against the descipriptions of items in the menu.
// -The user will then be able to narrow down their choices by being able to remove items that result from the search.
//
// Tasks:
// -create a textbox and button with the lable "Narrow it down for me!"
//
// -User is initially presented with the above textbox when they visit the page.
// -When the user enters something into the textbox and clicks to search, the app will reach out to the server to retrieve the full list of menue items.
// The app will then iterate over the list of items and for each item, check if the user's search term appears anywhere in the description for the menu item.
// If there is a match, the menu item is then placed in a special array called "found". If there is no match, the menu item is skipped over.
//
// Once the search traverses the menu, the app will display the "found" array. Each item in this array should show the name of the menu item, the short_name, and the description.
// The data can be displayed in an unordered list, separated by a comma, or in a "fancy" grid or some shit. How it's dispalyed is up to you.
//
// The app will need to provide a "Don't want this one!" button next to each item in the "found" list to be able to selectively remove the items.
//
// If the user's search term is not found, or the user does not enter anything for the search, the app should display a message "Nothing Found".
//
// You can retrieve the items from the server every time the user clicks to search; you do not have to cache the response. Basically, every time the "Narrow it down" button is clicked,
// all the previous data is cleared, and the process starts over again. Your app does not need to remember what the user chose to remove from the list on the previous search.
//

(function () {

'use strict';

Angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('NarrowItDownService' NarrowItDownService);

NarrowItDownController.$inject = ['NarrowItDownService'];
function NarrowItDownController ( NarrowItDownService ) {

  var menu = this;
  var promise = NarrowItDownService.getMenuCategories();

  promise.then(function(response) {
    menu.categories = response.data;
  })
  .catch(function(error){
    console.log("holyshiterrors");
  });
};

NarrowItDownService.$inject = ['$http']
function NarrowItDownService ( $http ) {

    var service = this;

    service.getMenuCategories = function () {
      var response = $http({
        method: "GET",
        url: ("blah")
      });
      return response;
    };
};

})();
