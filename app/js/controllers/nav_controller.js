(function (app) {
    'use strict';

    app.controller('NavCtrl', function ($scope, $location) {

        $scope.isActive = function(route) {
            return route === $location.path();
        }

    });
})(angular.module('kilroe'));
