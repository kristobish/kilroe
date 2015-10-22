'use strict';

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-64928538-1']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

$(function(){
    $('.ga-home').click(function(){
        _gaq.push(['_trackEvent', 'Home-Nav-Button', 'clicked']);
    });
    $('.ga-tour').click(function(){
        _gaq.push(['_trackEvent', 'Tour-Nav-Button', 'clicked']);
    });
    $('.ga-about').click(function(){
        _gaq.push(['_trackEvent', 'About-Nav-Button', 'clicked']);
    });
    $('.ga-video').click(function(){
        _gaq.push(['_trackEvent', 'Video-Nav-Button', 'clicked']);
    });
    $('.ga-photos').click(function(){
        _gaq.push(['_trackEvent', 'Photos-Nav-Button', 'clicked']);
    });
    $('.ga-contact').click(function(){
        _gaq.push(['_trackEvent', 'Contact-Nav-Button', 'clicked']);
    });
});
