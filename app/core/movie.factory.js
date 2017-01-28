(function() {
    'use strict';

    angular
        .module('movie-finder')
        .factory('movieFactory', function($httm) {
            var service = {
                searchForMovie: function(input) {
                   return $http.get('http://omdbapi.com/?s=' + input)
                },
                getById: fucntion(imbbId) {
                    return $http.get('http://omdbapi.com/?s=' + ombapi)

    factory.$inject = ['dependencies'];

    /* @ngInject */
    function factory(dependencies) {
        var service = {
            searchForMovie: searchForMovie,
            getById: getById
        };

        return service;

        ////////////////////////

        function searchForMovie(input)

    }


    }
})();