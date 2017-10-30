(function () {
'use strict';

angular.module('Restaurant')
.component('menuItems', {
  templateUrl: 'src/restaurant/templates/menu-items.template.html',
  bindings: {
    items: '<'
  }
});

})();
