'use strict';

var app = angular.module('StarWarsAPI');

app.controller('homeCtrl', function(){
  console.log("HomeController!!");
});

app.controller('categoryCtrl', function($scope, $state, Swapi){

  $scope.categories = [];

  Swapi.getAll()
  .then(res => {
    var keys = Object.keys(res.data);
    //console.log(res.data);
    for(var i = 0; i<keys.length; i++){
      var categories = {
        name: keys[i].toUpperCase(),
        link: res.data[keys[i]]
      }
      $scope.categories.push(categories);
    };
  })
  .catch(err => {
    console.log('err: ', err);
  });
});

app.controller('detailCtrl', function($scope, $state, category){
$scope.chosenCategory = [];
  var categoryObject = category.data.results;
  console.log(categoryObject);
  for(var i = 0; i<categoryObject.length; i++){
    var obj = {
      index:      [i],
      people:     categoryObject[i].name,
      height:     categoryObject[i].height,
      mass:       categoryObject[i].mass,
      gender:     categoryObject[i].gender,
      eyecolor:   categoryObject[i].eye_color,
      haircolor:  categoryObject[i].hair_color,
      species:    categoryObject[i].species,
      birth:      categoryObject[i].birth_year,
      skin:       categoryObject[i].skin_color,

    }
    $scope.chosenCategory.push(obj);
  };

  $scope.moreInfo = person => {
    var index = $scope.chosenCategory.indexOf(person);

  }

});
