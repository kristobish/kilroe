(function (app) {
    'use strict';

    app.controller('VideoCatalogCtrl', function ($scope, Ref, $firebaseArray) {

        function createVideo (date, youtubeId, description, venue) {
            return {
                date: date,
                description: description,
                venue: venue,
                youtubeId: youtubeId
            };
        }

        $scope.newVideo = createVideo();

        $scope.videos = $firebaseArray(Ref.child('videos'));

        // provide a method for adding a video
        $scope.addVideo = function (newVideo) {

            //Converting date for Firebase
            newVideo.date = newVideo.date.getFullYear() + '/' + (newVideo.date.getMonth() + 1) + '/' + newVideo.date.getDate();

            // Add video to Firebase
            $scope.videos.$add(newVideo);

            $scope.newVideo = createVideo();

        };

        //Remove video
        $scope.removeVideo = function (video) {
            $scope.videos.$remove(video);
        };

        //for handling datepickers
        $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

    });

    app.directive('youtube', function ($sce) {
        return {
            restrict: 'A',
            scope: {
                youtubeId: '@youtube'
            },
            replace: true,
            template: '<div style="height:400px;"><iframe style="overflow: hidden; width: 600px; height: 400px" width="600px" height="400px" data-ng-src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
            link: function (scope) {
                scope.$watch('youtubeId', function (youtubeId) {
                    if (youtubeId) {
                        scope.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + youtubeId);
                    }
                });
            }
        };
    });

})(angular.module('kilroe'));
