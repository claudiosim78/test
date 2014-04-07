'use strict';

/* Services */

var moviecatServices = angular.module('moviecatServices', ['ngResource']);

moviecatServices.factory('Movie', ['$resource',
  function($resource){
    return $resource('movies/:moviesSlug.json', {}, {
      query: {method:'GET', params:{moviesSlug:'results'}, isArray:true}
    });
  }]);