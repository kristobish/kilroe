(function (app) {
    'use strict';

    app.config(function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.spinnerTemplate = '<div id="loading-bar-spinner"><div class="fa fa-spinner fa-pulse fa-3x"></div></div>';
        //cfpLoadingBarProvider.loadingBarTemplate = '<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>';
    });


})(angular.module('kilroe'));