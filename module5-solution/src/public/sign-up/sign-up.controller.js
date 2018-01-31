(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['menuItems'];
function SignUpController(menuItems) {
  var $ctrl = this;
  //$ctrl.menuItems = menuItems;
  $ctrl.firstName;
  $ctrl.lastName;
  $ctrl.email;
  $ctrl.telephone;
  $ctrl.favorite;

  $ctrl.menuItems = menuItems;

  $ctrl.signUp = function (){

  }
}

})();

//the controller takes the input from the sign up html page and passes the data into a service that creates this user and saves their info

//we also need to be able to validate the user's favorite meal choice by checking if it's on the menu.
//to do this we need to get the menu items and see if the user's choice matches anything.

//the controller has to reference the menu.service via the routes file in a resolve: attribute, and inject this as a controller dependency.
//see menu-items.controller.js and .state public.menu-items in public.routes.js
