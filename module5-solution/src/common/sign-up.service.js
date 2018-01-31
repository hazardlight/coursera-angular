// this should really be called the create-user service
// this needs to instantiate an object that stores the user's info entered in the sign up page
// needs a function for setting the info and also retreiving it

//this function should also have logic to check if the fav entered by the user is on the menu

//..the data does not persist after

(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);


SignUpService.$inject = [];
function SignUpService() {
  var service = this;

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

      service.user = {
        f: service.firstName,
        l: service.lastName,
        e: service.email,
        t: service.telephone,
        v: service.favorite
      };

      console.log("fetching First Name: ", service.firstName);
      console.log("fetching user config obj: ", service.user);

      console.log("signUp complete");
  };

  //returns the user obj
  service.getUserData = function () {
    return service.user;
  };



}
})();
