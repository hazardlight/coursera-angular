(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMatchedMenuItems = function (searchTerm) {

      return $http({
        method: "GET",
        url: ( "https://davids-restaurant.herokuapp.com/menu_items.json" )
      }).then (function (result) {

        var rawJSON = result.data.menu_items;
        searchTerm = searchTerm.toLowerCase();
        var foundItems = [];
        var count = 0; //this can also be implemented using .push from rawJSON

        for (var i=0; i<rawJSON.length; i++){
          if(rawJSON[i].name.toLowerCase().includes(searchTerm))
          {
            foundItems[count] = rawJSON[i];
            count++;
            console.log(foundItems, "foundItems " + count);
          }
        }
        return foundItems;
      });
    };
}
})();
