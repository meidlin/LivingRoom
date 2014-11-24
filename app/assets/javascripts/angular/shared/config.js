angular.module('myApp')

.config(function($stateProvider, $urlRouterProvider, $locationProvider){

  // $locationProvider.html5Mode({enabled:true, requiredBase:true});

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('chat', {
      url: '/chat',
      templateUrl: 'chat.html',
      controller: 'chatController'
    })

    // .state('planet', {
    //   url: '/planet/:id',
    //   templateUrl: 'planet.html',
    //   controller: 'planetController'
    // });

});