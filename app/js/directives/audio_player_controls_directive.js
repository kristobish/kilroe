(function (app) {
    'use strict';

    app.directive('audioPlayerControls', function(){
        return {
            restrict: 'A',
            link: function(){

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
            }
        };
    });

})(angular.module('kilroe'));