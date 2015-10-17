(function (app) {
    'use strict';

    app.filter('dateFormatGig', function ($filter) {
        return function (input) {
            if (input === null) {
                return '';
            }

            return $filter('date')(new Date(input), 'EEEE M.d');
        };
    });

})(angular.module('kilroe'));
