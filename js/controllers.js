'use strict';

/* Controllers */

var moviecatControllers = angular.module('moviecatControllers', []);

moviecatControllers.controller('MovieListCtrl', ['$scope', 'Movie',
  function($scope, Movie) {
    $scope.movies = Movie.query();
  }]);


moviecatControllers.controller('MovieDetailCtrl', ['$scope', '$routeParams', 'Movie',
  function($scope, $routeParams, Movie) {

  }]);


moviecatControllers.controller('ClickCtrl', ['$scope', 
  // When the document is clicked, it will invoke
  // this method, passing-through the jQuery event.                
  function($scope) {
    $scope.handleClick = function( event ){
        
      if(jQuery(event.target).closest('#quicksearch').length==0&&!jQuery(event.target).is("input")){
        jQuery('#quicksearch').hide();
      }
      else{
        jQuery('#quicksearch').show(); 
      }
        
    }
  }]);
