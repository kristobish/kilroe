//(function (app, $) {
(function (app) {
    'use strict';

    app.controller('PhotoCatalogCtrl', function ($scope, Ref, $firebaseArray, Lightbox) {

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

        $scope.openLightboxModal = function (index) {
            Lightbox.openModal($scope.photos, index);
        };
    });

    app.config(function (LightboxProvider) {
        LightboxProvider.getImageUrl = function (photo) {
            return '/images/photos/' + '/' + photo.venue + '/' + photo.date + '/' + photo.fileName + '.jpg';
        };

        LightboxProvider.getImageCaption = function (photo) {
            return photo.altName + ' ' + photo.date;
        };

        LightboxProvider.fullScreenMode = true;

        // set a custom template
        LightboxProvider.templateUrl = '/templates/lightbox.html';
    });

    //app.directive('fancybox', function(){
    //    return {
    //        restrict: 'C',
    //        link: function(){
    //
    //            $('.fancybox').fancybox({
    //                padding : 0,
    //                openEffect  : 'elastic',
    //                preload : true
    //            });
    //        }
    //    };
    //});

    //app.directive('swipebox', function(){
    //    return {
    //        restrict: 'C',
    //        link: function(){
    //
    //            $('.swipebox').swipebox({
    //                loopAtEnd: true
    //            });
    //        }
    //    };
    //});


})(angular.module('kilroe'));
//})(angular.module('kilroe'), jQuery);