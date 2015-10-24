(function (app) {
    'use strict';

    app.controller('AudioCtrl', ['$scope', function ($scope) {
        $scope.songs = [
            {
                id: 'one',
                title: 'FREE FALLIN',
                artist: '@ Whiskey Priest',
                url: '/audio/freefallin.mp3'
            },
            {
                id: 'two',
                title: 'DAMMIT',
                artist: '@ Lansdowne Pub',
                url: '/audio/dammit.mp3'
            },
            {
                id: 'three',
                title: 'GOOD RIDDANCE',
                artist: '@ Hennessy\'\s',
                url: '/audio/goodriddance.mp3'
            },
            {
                id: 'four',
                title: '4-SONG MEDLEY',
                artist: '@ Bell In Hand',
                url: '/audio/medley.mp3'
            }

        ];

        //TODO Put this toggle functionality in a directive
        //Toggles audio player controls
        $(function() {
            $('.play-all').click(function(){
               $('.play-all').css('display','none');
               $('.pause').css('display','inline-block');
            });
            $('.pause').click(function(){
               $('.play').css('display','inline-block');
               $('.pause').css('display','none');
            });
            $('.play').click(function(){
               $('.pause').css('display','inline-block');
               $('.play').css('display','none');
            });
            $('.mic-on').click(function(){
               $('.mic-off').css('display','inline-block');
               $('.mic-on').css('display','none');
                    });
            $('.mic-off').click(function(){
               $('.mic-on').css('display','inline-block');
               $('.mic-off').css('display','none');
            });
        });

    }]);

})(angular.module('kilroe'));
