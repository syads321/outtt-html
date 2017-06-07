 var app = angular.module('app', ['ngRoute', 'angular-loading-bar', 'ngAnimate'], function($interpolateProvider, cfpLoadingBarProvider) {
     cfpLoadingBarProvider.includeSpinner = false;
 });
 app.config(function($routeProvider, $locationProvider) {
     $routeProvider
         .when('/', {
             templateUrl: 'templates/profile.html',
             controller: 'Profile'
         })
         .when('/repositories', {
             templateUrl: 'templates/repositories.html',
             controller: 'Repositories'
         })
         .when('/stars', {
             templateUrl: 'templates/stars.html',
         })
         .when('/followers', {
             templateUrl: 'templates/follower.html',
         })
         .when('/following', {
             templateUrl: 'templates/following.html',
         });
     //$locationProvider.otherwise('/');

     // configure html5 to get links working on jsfiddle
     $locationProvider.html5Mode(false);
 });

 app.run(['$rootScope', function($rootScope, $http) {
     // Etc. Initialize here.
     $rootScope.user = {};
 }]);