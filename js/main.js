window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        game: '../game',
    }
});

requirejs(['jquery', 'game/js/game.js', 'game/js/renderer.js', 'game/js/camera.js'], function($, Game, Renderer, Camera){
    
    Renderer.init($('#myCanvas')[0]);
    Game.init();
    Camera.init(Game);
});
