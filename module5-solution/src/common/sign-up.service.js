// this should really be called the create-user service
// this needs to instantiate an object that stores the user's info entered in the sign up page
// needs a function for setting the info and also retreiving it

//this function should also have logic to check if the fav entered by the user is on the menu

//..the data does not persist after

(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);


SignUpService.$inject = ['MenuService'];
function SignUpService(MenuService) {
  var service = this;
  var promise;

  service.userCreated = false;
  service.itemNotFound = false;

  service.menuCategories = MenuService.getCategories();
  console.log("fetch menu categories from server: ", service.menuCategories);

  service.menuItems = MenuService.getMenuItems();
  console.log("fetch menu items from server: ", service.menuItems);

  // service.itemNames = [];
  //
  // console.log("testing pulling the item name");
  // console.log(service.menuItems.data);



  // for( var i=0; i<service.menuItems.length; i++)
  // {
  //   service.itemNames[i] = service.menuItems[i].name;
  // }

  //user data
  // service.firstName;
  // service.lastName;
  // service.email;
  // service.telephone;
  // service.favorite;

  //user obj
  //service.user = {};

  //sets the user data and places it in the user obj
  service.setUserData = function (f_name, l_name, email, tel, fav) {
      console.log("inside SignUpService");
      service.firstName= f_name;
      service.lastName= l_name;
      service.email= email;
      service.telephone= tel;
      service.favorite= fav; //all this config can prob just be applied in the user obj.

      //if(service.menuItems.menu_items.name.includes(service.favorite) == true)

      promise = MenuService.getMatchedMenuItems(service.favorite);

      promise.then (function (foundItems) {
        service.items = foundItems;
        console.log("logging service.items var: ", service.items);

        if(service.items != 0) //greater than zero maybe?
        {
          service.user = {
            f: service.firstName,
            l: service.lastName,
            e: service.email,
            t: service.telephone,
            v: service.favorite
          }
            service.userCreated = true;
            service.itemNotFound = false;
        }
        else {
          service.itemNotFound = true;
          service.userCreated = false;
        }
      })
      .catch(function(error) {
        console.log(error);
      });
      // service.menuItems.menu_items.name.includes(service.favorite);
      // console.log("testing the favorite item search");
      // console.log("you entered: ", service.favorite);
      // console.log("search result: ", service.menuItems.menu_items.name.includes(service.favorite));

      // service.user = {
      //   f: service.firstName,
      //   l: service.lastName,
      //   e: service.email,
      //   t: service.telephone,
      //   v: service.favorite
      // };

      console.log("fetching First Name: ", service.firstName);
      console.log("fetching user config obj: ", service.user);
      console.log("fetching search result for favorite item: ", service.itemNotFound);

      console.log("signUp complete");

      //service.userCreated = true;
  };

  //returns the user obj
  service.getUserData = function () {
    return service.user;
  };
}
})();
