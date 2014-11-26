angular.module('myApp')

.service('api', function($http){

  return {

    getMovies: function(){
      // STATUS OF PROMISE: Fulfilled, Rejected, Pending
      var promise = $http.get('api/movies')
      .then(function(response) {
        return response;
      })
      return promise;
    },

    getLists: function(){
      // STATUS OF PROMISE: Fulfilled, Rejected, Pending
      var promise = $http.get('api/lists')
      .then(function(response) {
        return response;
      })
      return promise;
    },

    createList: function(something, currentUser){
      $http.post('api/lists', {list:{ name: something, user_id: currentUser.id } });
      console.log('almost there');
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

}})
.service('UserService', function(){
  this.user = currentUser;
})