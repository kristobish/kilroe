(function (app) {
    'use strict';
    /*global moment */

    app.filter('dateFormatGig', function ($filter) {
        return function (input) {
            if (input === null) {
                return '';
            }

            return $filter('date')(new Date(input), 'EEE M.d.yyyy');
        };
    });

    app.filter('dateFormatGigPast', function ($filter) {
        return function (input) {
            if (input === null) {
                return '';
            }

            return $filter('date')(new Date(input), 'M.d.yy');
        };
    });

    app.filter('isFuture', function() {
        return function(gigs) {
            return gigs.filter(function(gig){
                return moment(gig.date, 'YYYY-MM-DD').isSameOrAfter(moment().format('YYYY-MM-DD'));
            });
        };
    });

    app.filter('isPast', function() {
        return function(gigs) {
            return gigs.filter(function(gig){
                return moment(gig.date, 'YYYY-MM-DD').isBefore(moment().format('YYYY-MM-DD'));
            });
        };
    });

})(angular.module('kilroe'));
