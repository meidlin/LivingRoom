angular.module('myApp')
.controller('listController', ['$scope', 'UserService', 'api', function($scope, UserService, api){
	$scope.currentUser = UserService.user;
	console.log($scope.currentUser);

	api.getLists()
		.then(function(data){
		$scope.lists = data.data;
	});

	api.getMovies()
		.then(function(data){
		$scope.movies = data.data;
	});	
		
	$scope.addList = function(){
		api.createList($scope.listName, $scope.currentUser);
		// CLEAR the input after add planet
		$scope.lists.push({name: $scope.listName});
	};

}]);