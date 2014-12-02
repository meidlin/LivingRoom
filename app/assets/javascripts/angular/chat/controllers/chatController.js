angular.module('myApp')
.controller('chatController', ['$rootScope','$scope', '$location', 'PubNub', 'UserService', function($rootScope, $scope, $location, PubNub, UserService){
  //States the user that is logged in
  $scope.currentUser = UserService.user;
  $scope.channels = PubNub.ngListChannels()
  //Check to see if PubNub is intialized
	if (!$rootScope.initialized) {

    // Initialize the PubNub service
	    PubNub.init({
	      subscribe_key: 'sub-c-afabf17c-6a18-11e4-b944-02ee2ddab7fe',
	      publish_key: 'pub-c-28c48402-cc66-488a-bb47-accd95f3900c',
        ssl: true,
        uuid: $scope.currentUser.email
		});
    //Once initialized set to true so that it will not be called again
    $rootScope.initialized = true;
	}
  //set the channel to The Living Room
	$scope.channel = 'The Living Room';

  $scope.newChannel = function(){
    PubNub.ngSubscribe({ channel: Math.random*100})
  };

  $scope.unsubcribeChannel = function(){
    PubNub.ngUnsubscribe({channel: $scope.channel});
  };



  //array of messages
	$scope.messages = [];
  // Subscribe to the Channel
  PubNub.ngSubscribe({ channel: $scope.channel, message: $scope.handleMessage});
  // Register for presence events, requires Presence enabled
  $rootScope.$on(PubNub.ngPrsEv($scope.channel), function(ngEvent, payload) {
    $scope.$apply(function() {
      console.log(ngEvent);
      if (payload.event.action == "join"){
        $scope.users = PubNub.ngListPresence($scope.channel);
      }
      else if (payload.event.action == "leave"){
        console.log('what is this', payload);
      };
    });
  });
  // $scope.subscribe = function(){
  //   PubNub.ngSubscribe({ channel: $scope.channel, message: $scope.handleMessage});
  //   // Register for presence events, requires Presence enabled
  //   $rootScope.$on(PubNub.ngPrsEv($scope.channel), function(ngEvent, payload) {
  //     $scope.$apply(function() {
  //       console.log(ngEvent);
  //       if (payload.event.action == "join"){
  //         $scope.users = PubNub.ngListPresence($scope.channel);
  //       }
  //       else if (payload.event.action == "leave"){
  //         console.log('what is this', payload);
  //       };
  //     });
  //   });
  // }

  // Create a publish() function in the scope
  $scope.publish = function() {
    PubNub.ngPublish({
      channel: $scope.channel,
      message: "[" + $scope.currentUser.email + "] " + $scope.newMessage
    });
    //publish a user's message to the Living Room channel
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



  // Pre-Populate the user list (optional)
  // PubNub.ngHereNow({
  //   channel: $scope.channel
  // });
  
  // Populate message history, requires Storage and Playback enabled
  PubNub.ngHistory({
    channel: $scope.channel,
    count: 50
  });
}]);