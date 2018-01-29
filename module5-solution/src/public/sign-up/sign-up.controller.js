(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = [];
function SignUpController() {
  var $ctrl = this;
  //$ctrl.menuItems = menuItems;
  $ctrl.firstName;
  $ctrl.lastName;
  $ctrl.email;
  $ctrl.telephone;
  $ctrl.favorite;

  $ctrl.signUp = function (){
    
  }
}

})();
