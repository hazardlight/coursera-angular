//this data should only show after the SignUpService is instatiated


(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService'];
function MyInfoController(SignUpService) {
  var $ctrl = this;

  $ctrl.SignUpService = SignUpService;

  if($ctrl.SignUpService.userCreated == true) //should this logic even be in the ctrl???
  {
    $ctrl.user = $ctrl.SignUpService.getUserData();

    $ctrl.firstName = $ctrl.user.f;
    $ctrl.lastName = $ctrl.user.l;
    $ctrl.email = $ctrl.user.e;
    $ctrl.telephone = $ctrl.user.t;
    $ctrl.favorite = $ctrl.user.v;
  }
}
})();
