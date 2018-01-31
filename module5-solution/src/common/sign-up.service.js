(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);


SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
  var service = this;

}
})();


// this should really be called the create-user service
// this needs to instantiate an object that stores the user's info entered in the sign up page
// needs a function for setting the info and also retreiving it
