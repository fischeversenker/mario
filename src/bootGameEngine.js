    window.requestAnimFrame = (function(){
        return window.requestAnimationFrame       ||
               window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame    ||
               function( callback ){ window.setTimeout(callback, 1000 / 60);};
    })();

    require.config({
        baseUrl: 'src/game',
        paths: {
            jquery: '../../lib/jquery',
        },
    });

    require(['jquery', 'gameEngine'], function($, GameEngine){
        GameEngine.init($('#myCanvas')[0], 'PlayScene');
        GameEngine.start();
    });
