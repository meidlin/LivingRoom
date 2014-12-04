angular.module('myApp')

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

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

    .state('food', {
      url: '/food',
      templateUrl: 'food.html',
      controller: 'foodController'
    })

    .state('profile', {
      url: '/profile',
      templateUrl: 'profile.html',
      controller: 'profileController'
    });
}]);