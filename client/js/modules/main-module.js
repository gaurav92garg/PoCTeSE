'use strict';

var mainModule = angular.module('MainModule', ['ui.bootstrap']);
mainModule.controller('LandingCtrl', ['$scope','$location','$rootScope','$timeout','landingService',LandingCtrl]);
mainModule.factory('landingService', [LandingService]);
mainModule.controller('ProductsCtrl', ['$scope','$rootScope','$timeout','landingService', ProductsCtrl]);

