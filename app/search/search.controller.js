(function() {
        'use strict';

        angular
            .module('app')
            .controller('MovieController', MovieController);

        MovieController.$inject = ['movieFactory'];

        function MovieController(movieFactory) {
            var vm = this;

        vm.callMovieTitleApi = vm.callMovieTitleApi;
        vm.searchMovie = [];

        /* @ngInject */

        function MovieController(title) {
           $http
            .get('http://www.omdbapi.com/?s=Star+Wars&type=movie=' + title + "&APPID=true&plot=full")
            .then(function(response){


            vm.movieinfo = response.data;
            vm.searchMovie.push({event: vm.movieinfo.name, title});

            ////////////////


        function findMovie(input) {
            movieFactory
                .searchForMovie(input)
                .then(function(response) {
                    vm.results = results
                    
                }
        }

                    console.log(vm.movieinfo);

                });

        }
    }
})();
