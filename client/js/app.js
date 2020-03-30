'use strict';

/* Application declaration */
var app = angular.module('app', [
   'ngRoute',
   'ngResource',
   'ui.bootstrap',
   'MainModule'
]);

/* Application configuration */
app.config(function($routeProvider, $locationProvider) {

   $routeProvider
   .when('/', {
      templateUrl: '../views/landing.html',
      controller: 'LandingCtrl'
   })
   .when('/products', {
      templateUrl: '../views/products.html',
      controller: 'ProductsCtrl'
   })
   .when('/basket', {
      templateUrl: '../views/products.html',
      controller: 'ProductsCtrl'
   });


   /* HTML5 routing */
   $locationProvider.html5Mode(true);
});
