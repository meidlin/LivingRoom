angular.module('myApp')
.controller('chatController', ['$rootScope','$scope', '$location', 'PubNub', function($rootScope, $scope, $location, PubNub){
	console.log('stuff');
	if (!$rootScope.initialized) {

    // Initialize the PubNub service
	    PubNub.init({
	      subscribe_key: 'sub-c-afabf17c-6a18-11e4-b944-02ee2ddab7fe',
	      publish_key: 'pub-c-28c48402-cc66-488a-bb47-accd95f3900c',
        ssl: true,
	      uuid:$scope.userId
		});
    $rootScope.initialized = true;
	}
	$scope.channel = 'The Chat';

	$scope.messages = ['Welcome to ' + $scope.channel];
  // Subscribe to the Channel
  PubNub.ngSubscribe({ channel: $scope.channel });

  // Create a publish() function in the scope
  $scope.publish = function() {
    PubNub.ngPublish({
      channel: $scope.channel,
      message: "[" + $scope.userId + "] " + $scope.newMessage
    });
    $scope.newMessage = '';
  };

  // Register for message events
  $rootScope.$on(PubNub.ngMsgEv($scope.channel), function(ngEvent, payload) {
    $scope.$apply(function() {
      if ($scope.messages.indexOf(payload.message) == -1) {
        $scope.messages.unshift(payload.message);
      }
    });
  });

  // // Register for presence events (optional)
  // $rootScope.$on(PubNub.ngPrsEv($scope.channel), function(ngEvent, payload) {
  //   $scope.$apply(function() {
  //     $scope.users = PubNub.ngListPresence($scope.channel);
  //   });
  // });

  // // Pre-Populate the user list (optional)
  // PubNub.ngHereNow({
  //   channel: $scope.channel
  // });
  
  // // Populate message history (optional)
  // PubNub.ngHistory({
  //   channel: $scope.channel,
  //   count: 500
  // });
console.log($scope.channel);
}]);