'use strict';

var app = angular.module('StarWarsAPI', ['ui.router', 'ui.bootstrap', 'oitozero.ngSweetAlert']);


app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'html/home.html',
    controller: 'homeCtrl'
  })
  .state('category', {
    url: '/category',
    templateUrl: 'html/category.html',
    controller: 'categoryCtrl'
  })
  .state('detail', {
    url: '/detail/:cat',
    templateUrl: 'html/detail.html',
    controller: 'detailCtrl',
    resolve: { category:
      function(Swapi, $stateParams){
      return Swapi.getCategory($stateParams.cat);

    }
  }
});



$urlRouterProvider.otherwise('/');
});

//
// .state('detail', {
//       url: '/detail/:name',
//       templateUrl: '/html/detail.html',
//       controller: 'detailCtrl',
//       resolve: {
//         person:
//           function(People, $stateParams) {
//             // return a promise which will resolve to the person
//             return People.getByName($stateParams.name);
//         }
//     })
