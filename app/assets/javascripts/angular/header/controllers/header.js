angular.module('myApp')
.controller('headerController', ['$scope', function($scope, $location){

	$scope.isActive = function (viewLocation) {
	     var active = (viewLocation === $location.path());
	     return active;
	};
}]);