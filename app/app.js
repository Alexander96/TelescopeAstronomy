/// <reference path="js/lib/angular.min.js" />

var app = angular.module('app', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/templates/home.html',
            })
            .when('/', {
                templateUrl: 'app/templates/home.html',
            })
            .when('/refractor', {
                templateUrl: 'app/templates/refractor.html',
                controller: 'RefractorController'
            })
            .when('/reflector', {
                templateUrl: 'app/templates/reflector.html',
                controller: 'ReflectorController'
            })
            .when('/brightness', {
                templateUrl: 'app/templates/brightness.html',
            })
            .when('/distance', {
                templateUrl: 'app/templates/distance.html',
            })
            .when('/relativity', {
                templateUrl: 'app/templates/relativity.html',
            })
            .when('/dopplershift', {
                templateUrl: 'app/templates/dopplershift.html',
                controller: 'DopplerShiftController'
            })
            .when('/telescopelightenergy', {
                templateUrl: 'app/templates/telescopelightenergy.html',
            })
            .when('/eyedetectors', {
                templateUrl: 'app/templates/eyedetectors.html',
            })
            .when('/telescoperesolution', {
                templateUrl: 'app/templates/telescoperesolution.html',
                controller: 'TelescopeResolutionController'
            })
            .when('/telescopeComeThroughGalaxy', {
                templateUrl: 'app/templates/telescopeComeThroughGalaxy.html',
                controller: 'TelescopeComeThroughGalaxyController'
            })
            .when('/spectralanalysis', {
                templateUrl: 'app/templates/spectralanalysis.html',
            })
            .when('/inverseSquare', {
                templateUrl: 'app/templates/inverseSquare.html',
            })
            .when('/plankslaw', {
                templateUrl: 'app/templates/plankslaw.html',
                controller: 'PlanksLawController'
            })
            .when('/alberteinstein', {
                templateUrl: 'app/templates/alberteinstein.html',
            })
            .when('/galileogalilei', {
                templateUrl: 'app/templates/galileogalilei.html',
            })
            .when('/pascal', {
                templateUrl: 'app/templates/pascal.html',
            })
            .when('/sources', {
                templateUrl: 'app/templates/sources.html',
            })
            .otherwise({
                redirectTo: '/home'
            });
    });