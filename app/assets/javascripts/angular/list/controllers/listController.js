angular.module('myApp')
.controller('listController', ['$scope', 'UserService', 'api', function($scope, UserService, api){
	$scope.currentUser = UserService.user;
	// console.log($scope.currentUser);

	api.getLists()
		.then(function(data){
		$scope.lists = data.data;
		console.log($scope.lists)
	});

	api.getListMovies(4)
		.then(function(data){
		console.log(data.data);
		$scope.movies = data.data;
	});	
		
	$scope.getMoviesForList = function(id){
		api.getListMovies(id).then(function(data){
			$scope.arrayMovies = data.data;
		});
	};	

	$scope.addList = function(){
		api.createList($scope.listName, $scope.currentUser);
		// CLEAR the input after add planet
		$scope.lists.push({name: $scope.listName});
		alert("you've succesfully created " + $scope.listName);
	};

}]);