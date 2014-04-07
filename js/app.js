'use strict';

/* App Module */

var moviecatApp = angular.module('moviecatApp', [
  'ngRoute',
  'moviecatControllers',
  'moviecatFilters',
  'moviecatServices'
]);

moviecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/movies', {
        templateUrl: 'partials/movies.html',
        controller: 'MovieListCtrl'
      }).
      when('/movies/:moviesSlug', {
        templateUrl: 'partials/movie-detail.html',
        controller: 'MovieDetailCtrl'
      }).
      otherwise({
        redirectTo: '/movies'
      });
  }]);
