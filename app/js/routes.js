(function (app) {
    'use strict';

    app.config(['$routeProvider', function ($routeProvider) {
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
    }]);

})(angular.module('kilroe'));
