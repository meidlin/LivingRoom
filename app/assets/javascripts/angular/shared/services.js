angular.module('myApp')

.service('api',['$http', function($http){

  return {

    //Get all movies from database
    getMovies: function(){
      // STATUS OF PROMISE: Fulfilled, Rejected, Pending
      var promise = $http.get('api/movies')
      .then(function(response) {
        return response;
      })
      return promise;
    },

    //Create a movie from Rotten Tomatoes API
    createMovie: function(movieTitle, movieSynopsis, rtId, movieRuntime, criticScore, userScore, movieImage ){
      $http.post('api/movies', {
        movie:
        {title: movieTitle, 
         description: movieSynopsis,
         rt_id: rtId,
         runtime: movieRuntime,
         critic_rating: criticScore,
         user_rating: userScore,
         image_url: movieImage }
       })
    },

    //Get all lists from database
    getLists: function(){
      // STATUS OF PROMISE: Fulfilled, Rejected, Pending
      var promise = $http.get('api/lists')
      // var promise = $http.get('api/lists', {user_id: 1})
      .then(function(response) {
        return response;
      })
      return promise;
    },

    getListMovies: function(id){
      var promise = $http.get('api/lists/' + id)
      .then(function(response){
        return response;
      })
      return promise;
    },

    //Create list for user that is logged in
    createList: function(something, currentUser){
      $http.post('api/lists', {list:{ name: something, user_id: currentUser.id } });
      console.log('almost there');
    },

    //Add relation between movie and list
    createMovielist: function(movieId, listId){ //listId
      $http.post('api/movielists', {movielist: {movie_id: movieId, list_id: listId   } }); //list_id: listId
      console.log('add relation to movie and list!!!');
    },

    //Search for a movie through Rotten Tomatoes
    searchMovies: function(movieLookup){
      var promise = $http.get('apisearch', {params: {searchterm: movieLookup}})
    // var promise = $http({
    //     method: 'GET',
    //     url: 'http://www.corsproxy.com/api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=zf6bdxbz8w9wtrqjauznuqt4&q='+ movieLookup + '&page_limit=1',
    //   })
    .then(function(response){
        return response.data;
        })
      // console.log(movieLookup);
      return promise;
    },

    getFood: function(){
    var promise = $http.get('api/foods')
    .then(function(response){
        return response;
        })
      // console.log(movieLookup);
      return promise;
    }



    // showPlanet: function(planetID){
    //   // STATUS OF PROMISE: Fulfilled, Rejected, Pending
    //   var promise = $http.get('/api/planets/' + planetID)
    //   .then(function(response) {
    //     return response;
    //   })

    //   return promise;

    // },

    // // CREATE PLANET
    // addPlanet: function(planetName, planetImage){
    //   $http.post('api/planets', {name: planetName, image: planetImage});
    // },

    // // DELETE PLANET
    // removePlanet: function(planetId) {
    //   $http.delete('api/planets/' + planetId);
    // },

    // // EDIT PLANET
    // editPlanet: function(planet) {
    //   $http.patch('api/planets/' + planet._id.$oid, {name: planet.name, image: planet.image});
    // }

}}])

//Service to get the user object info that is logged in through rails
.service('UserService', function(){
  this.user = currentUser;
})