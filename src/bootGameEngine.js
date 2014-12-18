    window.requestAnimFrame = (function(){
        return window.requestAnimationFrame       ||
               window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame    ||
               function( callback ){ window.setTimeout(callback, 1000 / 60);};
    })();

    require.config({
        baseUrl: 'src',
        paths: {
            jquery: '../../lib/jquery',
        },
    });

    require(['jquery', 'api'], function($, API){
        API.init($('#myCanvas')[0]);
        API.startGame();
    });