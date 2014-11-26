angular.module('myApp')
.controller('listController', function($scope, UserService, api){
	$scope.currentUser = UserService.user;
	api.getLists()
		.then(function(data){
		$scope.lists = data.data;
	});

	$scope.addList = function(){
		console.log()
		api.createList($scope.listName, $scope.currentUser.id);
		// CLEAR the input after add planet
		// $scope.lists.push(list);
	};
});