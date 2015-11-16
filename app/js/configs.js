(function (app) {
    'use strict';

    app.config(function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.spinnerTemplate = '<div id="loading-bar-spinner"><div class="fa fa-spinner fa-pulse fa-3x"></div></div>';
        //cfpLoadingBarProvider.loadingBarTemplate = '<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>';
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


})(angular.module('kilroe'));