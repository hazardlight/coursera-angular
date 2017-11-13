(function () {
'use strict';

angular.module('data')
.service('MenuService', MenuService);

MenuService.$inject = ['$http'];
function MenuService ( $http ) {

    var service = this;

    service.getAllCategories = function () { //so we need this to dsiplay a list of clickable categories.
      return $http({
        method: "GET",
        url: ( "https://davids-restaurant.herokuapp.com/categories.json" )
      }).then (function (result) {

        // var rawJSON = result.data.categories;//this is already an array
        // var categories = [];
        // //we're iterating over the rawJSON, extracting the short_name, which is also the category letter and placing it in a categories array.
        // for (var i=0; i<rawJSON.length; i++)
        // {
        //   categories.push(rawJSON[i].name);
        // }
        // return categories;
        var categories = result.data;
        //console.log("result from getAllCategories() ", result.data);
        return categories;
      });
    };
    service.getItemsForCategory = function(categoryShortName) { //clicking one of the

      //var jsonURL = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName;
      return $http({
        method: "GET",
        url: ( "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName )
      }).then (function (result) {

        var categoryItems = result.data.menu_items; //this should be an array of items for the category (categoryShortName)
        return categoryItems;
      });
    };

    // service.getMatchedMenuItems = function (searchTerm) {
    //
    //   return $http({
    //     method: "GET",
    //     url: ( "https://davids-restaurant.herokuapp.com/categories.json" )
    //   }).then (function (result) {
    //
    //     var rawJSON = result.data.menu_items;
    //     searchTerm = searchTerm.toLowerCase();
    //     var foundItems = [];
    //     var count = 0; //this can also be implemented using .push from rawJSON
    //
    //     for (var i=0; i<rawJSON.length; i++){
    //       if(rawJSON[i].name.toLowerCase().includes(searchTerm))
    //       {
    //         foundItems[count] = rawJSON[i];
    //         count++;
    //         console.log(foundItems, "foundItems " + count);
    //       }
    //     }
    //     return foundItems;
    //   });
    // };
};


// MenuService.$inject = ['$q', '$timeout']
// function MenuService($q, $timeout) {
//   var service = this;
//
//   // List of shopping items
//   var items = [];
//
//   // Pre-populate a no cookie list
//   items.push({
//     name: "Sugar",
//     quantity: "2 bags",
//     description: "Sugar used for baking delicious umm... baked goods."
//   });
//   items.push({
//     name: "flour",
//     quantity: "1 bags",
//     description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
//   });
//   items.push({
//     name: "Chocolate Chips",
//     quantity: "3 bags",
//     description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
//   });
//
//   // Simulates call to server
//   // Returns a promise, NOT items array directly
//   service.getItems = function () {
//     var deferred = $q.defer();
//
//     // Wait 2 seconds before returning
//     $timeout(function () {
//       // deferred.reject(items);
//       deferred.resolve(items);
//     }, 800);
//
//     return deferred.promise;
//   };
// }
})();
