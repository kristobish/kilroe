(function (app, $) {
    'use strict';

    app.controller('PhotoCatalogCtrl', function ($scope, Ref, $firebaseArray) {

        function createPhoto (date, venue, fileName, altName) {
            return {
                date: date,
                venue: venue,
                fileName: fileName,
                altName: altName
            };
        }

        $scope.newPhoto  = createPhoto();

        $scope.photos = $firebaseArray(Ref.child('photos'));

        $scope.addPhoto = function (newPhoto) {

            //Converting date for Firebase
            newPhoto.date = (newPhoto.date.getMonth() + 1) + '-' + newPhoto.date.getDate() + '-' + newPhoto.date.getFullYear();

            // Add photo to Firebase
            $scope.photos.$add(newPhoto);

            $scope.newPhoto = createPhoto();

        };

        //Remove photo
        $scope.removePhoto = function (photo) {
            $scope.photos.$remove(photo);
        };

        //for handling datepickers
        $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.status = {
            isopen: false
        };

        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };


    });

    app.directive('fancybox', function(){
        return {
            restrict: 'C',
            link: function(){

                $('.fancybox').fancybox({
                    padding : 0,
                    openEffect  : 'elastic',
                    preload : true
                });
            }
        };
    });

})(angular.module('kilroe'), jQuery);
