(function (app) {
    'use strict';

    app.controller('NavCtrl', function ($scope, $location) {

        $scope.isActive = function (route) {
            return route === $location.path();
        };

        $(function() {
            $('.pushy a').click(function() {
                $('.pushy a').removeClass('active');
                $(this).addClass('active');
            });
        });

    });
})(angular.module('kilroe'));
