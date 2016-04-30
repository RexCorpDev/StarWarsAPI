'use strict';

var app = angular.module('StarWarsAPI');

app.service('Swapi', function($http) {

  this.getAll = () => {
    return $http.get('http://swapi.co/api/');
  }

  this.getCategory = category => {
    var catChoice = category.toLowerCase();
    console.log("category for swapi->", catChoice);
    return $http.get(`http://swapi.co/api/${catChoice}/`);
  }

});
