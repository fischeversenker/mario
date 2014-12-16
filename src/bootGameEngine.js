
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

    require(['jquery', 'game', 'renderer'], function($, Game, Renderer){
        Renderer.init($('#myCanvas')[0]);
        Game.init();
    });
