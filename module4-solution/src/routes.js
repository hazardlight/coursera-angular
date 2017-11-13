(function () {
'use strict';

angular.module('Restaurant')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/restaurant/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/restaurant/templates/categories.template.html',
    controller: 'CategoriesController as vm',
    resolve: {
      categories: ['MenuService', function (MenuService) { //sooo this is where you get 'items'
        return MenuService.getAllCategories();
      }]
    }
  })

  .state('categories.items', {
    url: '/items/{itemId}',
    templateUrl: 'src/restaurant/templates/items.template.html',
    controller: "ItemsController as itmCtrl"
  });

}

})();
