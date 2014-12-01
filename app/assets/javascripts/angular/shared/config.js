angular.module('myApp')

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  // $locationProvider.html5Mode({enabled:true, requiredBase:true});

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('chat', {
      url: '/chat',
      templateUrl: 'chat.html',
      controller: 'chatController'
    })

    .state('movie', {
      url: '/movie',
      templateUrl: "movie.html",
      controller: 'movieController'
    })

    .state('list', {
      url: '/list',
      templateUrl: 'list.html',
      controller: 'listController'
    })

    .state('group', {
      url: '/group',
      templateUrl: 'group.html',
      controller: 'groupController'
    })

    .state('profile', {
      url: '/profile',
      templateUrl: 'profile.html',
      controller: 'profileController'
    });
});