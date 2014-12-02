angular.module('myApp')
.controller('foodController', ['api', '$scope', function(api, $scope){
	api.getFood()
		.then(function(data){
			console.log(data.data);
			$scope.foods = data.data;
		})
}]);