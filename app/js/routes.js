(function (app) {
    'use strict';

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../../views/home.html'
            })

            .when('/photos', {
                templateUrl: '../../views/photos.html',
                controller: 'PhotoCatalogCtrl'
            })

            .when('/video', {
                templateUrl: '../../views/video.html',
                controller: 'VideoCatalogCtrl'
            })

            .when('/news', {
                templateUrl: '../../views/news.html',
                controller: 'NewsCtrl'
            })

            .otherwise({redirectTo: '/'});

            $locationProvider.html5Mode(true);
    }]);

})(angular.module('kilroe'));
